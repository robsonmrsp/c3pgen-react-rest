import { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import DatatableConfig from '@/common/ui/core/datatable/model/DatatableConfig';

// TODO tro
export const usePagination = (query, variables = { params: {}, filter: {} }) => {
  const [paramenters, setParameters] = useState(variables.params);
  const [filters, setFilters] = useState(variables.filter);
  // const [paramenters, setParameters] = useState({});
  // const [filters, setFilters] = useState({});

  const { data, loading, fetchMore, error } = useQuery(query, { variables });

  const { pager = {} } = data || {};
  return {
    tableConfig: new DatatableConfig({ ...pager, loading }),
    loading,
    paginate: (varia) => {
      const newParams = { ...paramenters, ...varia.params };
      const newFilters = { ...filters, ...varia.filter };
      setParameters(newParams);
      setFilters(newFilters);
      fetchMore({
        variables: { params: newParams, filter: newFilters },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return { pager: fetchMoreResult.pager };
        },
      });
    },
    error,
  };
};
