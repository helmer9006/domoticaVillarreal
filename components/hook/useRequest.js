import axios from "axios";
import { useState, useEffect } from "react";

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const useRequest = ({ endpoint }) => {
  const [requestData, setRequestData] = useState(initialState);
  useEffect(() => {
    const axiosRequest = async () => {
      const res = await axios
        .get(endpoint)
        .then((response) => {
          setRequestData({
            data: response.data,
            loading: false,
            error: undefined,
          });
        })
        .catch((error) => {
          setRequestData({
            data: undefined,
            loading: false,
            error: error.message,
          });
        });
    };
    axiosRequest();
  }, []);

  return requestData;
};

export default useRequest;
