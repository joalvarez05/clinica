let data = JSON.parse(localStorage.getItem("users")) || [
  {
    name: "Javier Gomez",
    login: false,
    tel: 3816093788,
    dateBirth: "2006-12-03",
    city: "Yerba Buena",
    dni: 39078547,
    genre: "male",
    obraSocial: "SUBSIDIO",
    email: "javier@gmail.com",
    password: "Asdasd123123!!",
    id: 1734555347601,
    role: "PACIENTE",
    aprobbed: true,
    turnos: [
      {
        id: 1,
        fecha: "2021-10-20",
        hora: "10:00",
        especialidad: "GINECOLOGIA Y OBSTETRICIA",
        doctor: "Chapatin",
        estado: "pendiente",
      },
    ],
  },
  {
    name: "Juan Perez",
    login: false,
    tel: 381219456,
    dateBirth: "1997-11-02",
    city: "San Miguel de Tucuman",
    dni: 12345612,
    genre: "male",
    obraSocial: "OSDE",
    email: "juan@gmail.com",
    password: "HolaJUAN123!!",
    id: 1734555347609,
    role: "PACIENTE",
    aprobbed: true,
    turnos: [
      {
        id: 2,
        fecha: "2021-10-20",
        hora: "11:00",
        especialidad: "GINECOLOGIA Y OBSTETRICIA",
        doctor: "Chapatin",
        estado: "pendiente",
      },
    ],
  },
  {
    name: "Chapatin",
    tel: 3816093788,
    dateBirth: "1945-03-12",
    city: "Yerba Buena",
    dni: 39078547,
    genre: "male",
    especialidad: "GINECOLOGIA Y OBSTETRICIA",
    matricula: 3461,
    email: "chapatin@gmail.com",
    password: "Asdasd123!!",
    id: 1734570993013,
    role: "DOCTOR",
    aprobbed: false,
  },
  {
    name: "Juguetes",
    tel: 381602348,
    dateBirth: "1975-02-6",
    city: "San Miguel de Tucuman",
    dni: 39074531,
    genre: "female",
    especialidad: "CIRUGIA GENERAL",
    matricula: 3158,
    email: "doctorajuguetes@gmail.com",
    password: "Asdasd1&",
    id: 1734570993014,
    role: "DOCTOR",
    aprobbed: false,
  },
  {
    name: "Admin Admino",
    tel: 3813995090,
    dateBirth: "1997-05-04",
    city: "San Miguel de Tucuman",
    dni: 40436799,
    genre: "male",
    email: "adminAdmino@gmail.com",
    password: "Asdasd1&",
    id: 17345709930199,
    role: "ADMIN",
  },
];

export default data;
