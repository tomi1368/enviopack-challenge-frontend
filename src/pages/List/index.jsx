import { FlexContainer } from "../../components/FlexContainer/style";
import { MainTitle } from "../../components/MainTitle/style";
import { useState, useEffect } from "react";
import FilterByName from "../List/components/FilterByName/index";
import FilterByPrice from "../List/components/FilterByPrice/index";
import { connect, useDispatch } from "react-redux";
import PaginatedItems from "../../components/Paginated";
import { GridStructure } from "../../components/GridStructure/style";
import { NotFoundProductTitle } from "./style";
import CatalogGridItem from "./components/CatalogGridItem";
import { getAll } from "../../store/actions/product";
import { useNavigate } from "react-router-dom";
const Component = ({ products, cartProducts }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [applyedFilters, setFilters] = useState([]);
  const [currentProductList, setCurrentProductList] = useState([]);
  const [
    filteredCurrentProductListValues,
    setFilteredCurrentProductListValues,
  ] = useState([]);
  const buildFilters = (newFilter) => {
    const filterUpdated =
      applyedFilters.filter(
        (applyedFilter) => applyedFilter.field === newFilter.field
      ).length > 0;

    const filterRemoved = newFilter.value === "no";

    /**
     * Se elimina el filtro
     */
    if (filterRemoved) {
      setFilters([
        ...applyedFilters.filter(
          (applyedFilter) => applyedFilter.field !== newFilter.field
        ),
      ]);
    }

    /**
     * Se actualiza un filtro
     */
    if (filterUpdated && !filterRemoved) {
      setFilters([
        ...applyedFilters.map((applyedFilter) => {
          if (applyedFilter.field === newFilter.field) {
            return newFilter;
          } else {
            return applyedFilter;
          }
        }),
      ]);
    }

    /**
     * Se agrega un filtro
     */
    if (!filterUpdated && !filterRemoved) {
      setFilters([...applyedFilters, newFilter]);
    }
  };
  const makeLayout = (items) => {
    if (!items) return null;
    if (items.length === 0)
      return <NotFoundProductTitle>Not found</NotFoundProductTitle>;
    return (
      <GridStructure
        style={{ gap: "30px", marginBottom: "40px" }}
        width="250px"
        maxWidth="900px"
      >
        {items.map((item) => {
          return (
            <CatalogGridItem
              cartProducts={cartProducts}
              catalogItem={item}
            ></CatalogGridItem>
          );
        })}
      </GridStructure>
    );
  };
  useEffect(() => {
    if (!!products) {
      setCurrentProductList(products);
    }
  }, [products]);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  useEffect(() => {
    const filteredTalents = currentProductList?.filter(
      (currentProductsValues) => {
        const thereAreFilters =
          applyedFilters.filter((applyedFilter) => !applyedFilter.groupal)
            .length > 0;
        const totalOfFilters = applyedFilters.filter(
          (applyedFilter) => !applyedFilter.groupal
        ).length;
        const passFilters = applyedFilters
          .filter(
            (applyedFilter) => !applyedFilter.special || !applyedFilter.groupal
          )
          .filter(
            (applyedFilter) =>
              currentProductsValues[applyedFilter.field] === applyedFilter.value
          ).length;
        const specialFilter = applyedFilters.filter(
          (applyedFilter) => !!applyedFilter.special
        );

        const speacialFilterCheck = specialFilter.filter((applyedFilter) => {
          return applyedFilter.special(
            currentProductsValues,
            applyedFilter.value
          );
        });

        return (
          !thereAreFilters ||
          (thereAreFilters &&
            totalOfFilters === passFilters + specialFilter.length &&
            speacialFilterCheck.length === specialFilter.length)
        );
      }
    );
    let initResult = filteredTalents;
    applyedFilters
      .filter((applyedFilter) => !!applyedFilter.groupal)
      .forEach((applyedFilter) => {
        initResult = applyedFilter.groupal(initResult);
      });
    setFilteredCurrentProductListValues(initResult);
  }, [applyedFilters, currentProductList]);

  return (
    <>
      <MainTitle>Catalogo</MainTitle>
      <FlexContainer
        style={{ marginBottom: "40px" }}
        justify="space-between"
        align="center"
      >
        <FilterByName setFilter={buildFilters}></FilterByName>
        <FilterByPrice
          setFilter={buildFilters}
          fieldName={"price"}
          selectData={[
            { value: "no", label: "Seleccionar", action: () => {} },
            {
              value: "highest",
              label: "Mas Caros",
              action: (array) => array.sort((a, b) => b.price - a.price),
            },
            {
              value: "lowest",
              label: "Mas Baratos",
              action: (array) => array.sort((a, b) => a.price - b.price),
            },
          ]}
        ></FilterByPrice>
      </FlexContainer>
      <PaginatedItems
        data={filteredCurrentProductListValues}
        makeLayout={makeLayout}
      ></PaginatedItems>
    </>
  );
};

const states = ({ productStore, cartStore }) => {
  const { data: products } = productStore.all;
  const cartProducts = cartStore.data.products;
  return {
    products,
    cartProducts,
  };
};

export default connect(states)(Component);
