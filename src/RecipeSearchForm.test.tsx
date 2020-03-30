import React from 'react';
import { render } from '@testing-library/react';
import RecipeSearchForm from './RecipeSearchForm';

test('renders query search element', () => {
  const { getByPlaceholderText} = render(<RecipeSearchForm />);
  const input = getByPlaceholderText("Search");
  expect(input).toBeInTheDocument();
});

test('renders mealtype multi select', () => {
  const { getByLabelText} = render(<RecipeSearchForm />);
  const select = getByLabelText("Meal Type");
  expect(select).toBeInTheDocument();
  expect(select).toHaveAttribute("multiple");
});
test('renders diet multi select', () => {
  const { getByLabelText} = render(<RecipeSearchForm />);
  const select = getByLabelText("Diet");
  expect(select).toBeInTheDocument();
  expect(select).toHaveAttribute("multiple");
});

test('renders cuisine multi select', () => {
  const { getByLabelText} = render(<RecipeSearchForm />);
  const select = getByLabelText("Cuisine Type");
  expect(select).toBeInTheDocument();
  expect(select).toHaveAttribute("multiple");
});

test('renders health type multi select', () => {
  const { getByLabelText} = render(<RecipeSearchForm />);
  const select = getByLabelText("Health Type");
  expect(select).toBeInTheDocument();
  expect(select).toHaveAttribute("multiple");
});