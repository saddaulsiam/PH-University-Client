import { useGetAllSemesterQuery } from '../../../redux/features/academicSemester/academicSemesterApi';

const AcademicSemester = () => {
  const { data } = useGetAllSemesterQuery(undefined);
  return <div>{JSON.stringify(data)}</div>;
};

export default AcademicSemester;
