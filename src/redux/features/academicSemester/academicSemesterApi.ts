import { baseApi } from '../../api/baseApi';

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSemester: builder.query({
      query: () => ({
        url: '/academic-semesters',
        method: 'Get',
      }),
    }),
  }),
});

export const { useGetAllSemesterQuery } = authApi;
