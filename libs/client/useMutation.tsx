import React, { useState } from "react";

interface useMutationProps {
  loading: boolean;
  data?: object;
  error?: object;
}

type useMutationResults = [(data: any) => void, useMutationProps];

function useMutation(url: string): useMutationResults {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  // enter_form_data => api/~ 보내기
  function mutation(data: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resposne) => resposne.json().catch(() => {}))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }

  return [mutation, { data, loading, error }];
}

export default useMutation;
