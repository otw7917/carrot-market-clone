import { useState } from "react";

interface useMutationProps<T> {
  loading: boolean;
  data?: T;
  error?: object;
}

type useMutationResults<T> = [(data: any) => void, useMutationProps<T>];

function useMutation<T>(url: string): useMutationResults<T> {
  const [state, setState] = useState<useMutationProps<T>>({
    data: undefined,
    error: undefined,
    loading: false,
  });

  // enter_form_data => api/~ 보내기
  function mutation(data: any) {
    setState((prev) => ({ ...prev, loading: true }));
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((resposne) => resposne.json().catch(() => {}))
      .then((data) => setState((prev) => ({ ...prev, data })))
      .catch((error) => setState((prev) => ({ ...prev, error })))
      .finally(() => setState((prev) => ({ ...prev, loading: false })));
  }

  return [mutation, { ...state }];
}

export default useMutation;
