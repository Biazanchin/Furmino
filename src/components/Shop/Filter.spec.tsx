import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "./Filter";

const applyFiltersMock = jest.fn();

describe("Filter component", () => {
  beforeEach(() => {
    applyFiltersMock.mockClear();
  });

  it("should renders correctly", () => {
    render(
      <Filter
        applyFilters={applyFiltersMock}
        currentPage={1}
        totalProducts={10}
        itemsPerPage={5}
      />
    );

    expect(screen.getByText("Filter")).toBeInTheDocument();
    expect(screen.getByAltText("Filtro")).toBeInTheDocument();
    expect(screen.getByAltText("bolinhas")).toBeInTheDocument();
    expect(screen.getByAltText("page")).toBeInTheDocument();
    expect(screen.getByText("Showing 1-5 of 10 results")).toBeInTheDocument();
  });

  it("should initializes with correct initial state", () => {
    render(
      <Filter
        applyFilters={applyFiltersMock}
        currentPage={1}
        totalProducts={10}
        itemsPerPage={5}
      />
    );

    expect(screen.queryByLabelText("Show")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Sort by")).not.toBeInTheDocument();
  });

  it("should opens and closes popup correctly", () => {
    render(
      <Filter
        applyFilters={applyFiltersMock}
        currentPage={1}
        totalProducts={10}
        itemsPerPage={5}
      />
    );

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Filter"));

    const popup = screen.getByRole("dialog");
    expect(popup).toBeInTheDocument();

    fireEvent.click(screen.getByText("Apply"));

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("should applies filters correctly", () => {
    render(
      <Filter
        applyFilters={applyFiltersMock}
        currentPage={1}
        totalProducts={10}
        itemsPerPage={5}
      />
    );

    fireEvent.click(screen.getByText("Filter"));

    fireEvent.change(screen.getByTestId("category-select"), {
      target: { value: "Sofa" },
    });

    fireEvent.change(screen.getByTestId("sort-select"), {
      target: { value: "price" },
    });

    fireEvent.click(screen.getByText("Apply"));

    expect(applyFiltersMock).toHaveBeenCalledTimes(1);
    expect(applyFiltersMock).toHaveBeenCalledWith({
      category: "Sofa",
      sortBy: "price",
      isNew: false,
    });

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });
});
