import React, { useContext, useState } from 'react';
import StarContext from '../context/StarContext';

function OrderFilter() {
  const [coluna, setColuna] = useState('name');
  const [organize, setOrganize] = useState('ASC');
  const { setOrder } = useContext(StarContext);

  const options = [
    'name',
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water'];
  return (
    <form>
      <label htmlFor="column-sort" className="filters">
        Order column:
        <select
          className="filters"
          data-testid="column-sort"
          id="column-sort"
          value={ coluna }
          name="column"
          onChange={ ({ target: { value } }) => setColuna(value) }
        >
          {options.map((opt) => (
            <option key={ opt } value={ opt } className="filters">{opt}</option>
          ))}
        </select>
      </label>
      <label htmlFor="asc" name="order" className="filters">
        Crescente
        <input
          id="asc"
          type="checkbox"
          className="filters"
          value="ASC"
          name="order"
          data-testid="column-sort-input-asc"
          onChange={ ({ target: { value } }) => setOrganize(value) }
        />
      </label>
      <label htmlFor="desc" name="order" className="filters">
        Decrescente
        <input
          id="desc"
          type="checkbox"
          className="filters"
          value="DESC"
          name="order"
          data-testid="column-sort-input-desc"
          onChange={ ({ target: { value } }) => setOrganize(value) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => {
          setOrder({
            column: coluna,
            sort: organize,
          });
        } }
      >
        Ordenar
      </button>
    </form>
  );
}

export default OrderFilter;
