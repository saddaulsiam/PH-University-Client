import AdminDashboard from '../pages/admin/AdminDashboard';
import CreateAdmin from '../pages/admin/userManagement/CreateAdmin';
import CreateFaculty from '../pages/admin/userManagement/CreateFaculty';
import CreateStudent from '../pages/admin/userManagement/CreateStudent';
import AcademicSemester from '../pages/admin/academicManagement/AcademicSemester';

export const adminPaths = [
  {
    name: 'Dashboard',
    path: 'dashboard',
    element: <AdminDashboard />,
  },
  {
    name: 'Academic Management',
    children: [
      {
        name: 'Academic Semester',
        path: 'academic-semester',
        element: <AcademicSemester />,
      },
    ],
  },
  {
    name: 'User Management',
    children: [
      {
        name: 'Create Admin',
        path: 'create-admin',
        element: <CreateAdmin />,
      },
      {
        name: 'Create Faculty',
        path: 'create-faculty',
        element: <CreateFaculty />,
      },
      {
        name: 'Create Student',
        path: 'create-student',
        element: <CreateStudent />,
      },
      {
        name: 'Create Member',
        path: 'create-member',
        element: <CreateStudent />,
      },
    ],
  },
];
