import { API, graphqlOperation } from 'aws-amplify';
import { useQuery } from 'react-query';

import { listAddresss } from '../../../graphql/queries';
import { Address } from '../../../types/address';

interface Data {
  listAddresss: {
    items: Address[]
  }
}

const useAddresses = () => {

  const { data, isLoading, refetch, error } = useQuery(
    ['post'],
    async () => {
      const result: any = await API.graphql(graphqlOperation(listAddresss));
      return result.data as Data;
    }
  );

  const addresses = data ? data.listAddresss.items : [];

  return {
    addresses,
    error,
    isLoading,
    refetch
  }
};

export default useAddresses;
