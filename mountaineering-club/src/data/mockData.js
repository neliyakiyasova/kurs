export const peaks = [
    { id: 1, name: "Эльбрус", height: 5642, country: "Россия", region: "Кавказ" },
    { id: 2, name: "Монблан", height: 4808, country: "Франция", region: "Альпы" },
  ];
  
  export const climbers = [
    {
      id: 1,
      name: "Иван Петров",
      address: "Москва",
      contact: "ivan@example.com",
      ascents: [{ peak: "Эльбрус", date: "2023-07-15", group: "Группа А" }],
    },
    {
      id: 2,
      name: "Анна Сидорова",
      address: "Сочи",
      contact: "anna@example.com",
      ascents: [],
    },
  ];
  
  export const ascents = [
    {
      id: 1,
      startDate: "2023-07-10",
      endDate: "2023-07-15",
      peak: "Эльбрус",
      participants: ["Иван Петров"],
    },
  ];