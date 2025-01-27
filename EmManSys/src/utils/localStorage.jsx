localStorage.clear()

const employees = [
  {
    "firstName": "Arjun",
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Prepare Report",
        "taskDescription": "Compile the monthly sales report.",
        "taskDate": "2025-01-20",
        "category": "Reports",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Update Inventory",
        "taskDescription": "Check and update stock levels.",
        "taskDate": "2025-01-21",
        "category": "Inventory",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Schedule Meeting",
        "taskDescription": "Arrange a team meeting for next week.",
        "taskDate": "2025-01-22",
        "category": "Meetings",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "firstName": "Vikram",
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Customer Follow-up",
        "taskDescription": "Contact customers for feedback.",
        "taskDate": "2025-01-23",
        "category": "Customer Service",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Document Filing",
        "taskDescription": "Organize project files in the system.",
        "taskDate": "2025-01-24",
        "category": "Administration",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "firstName": "Rohan",
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Bug Fixing",
        "taskDescription": "Resolve critical issues in the app.",
        "taskDate": "2025-01-25",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review code submitted by the team.",
        "taskDate": "2025-01-26",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Presentation",
        "taskDescription": "Present project updates to stakeholders.",
        "taskDate": "2025-01-27",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "firstName": "Kabir",
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Product Testing",
        "taskDescription": "Test the new features of the product.",
        "taskDate": "2025-01-28",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Market Research",
        "taskDescription": "Analyze competitors’ strategies.",
        "taskDate": "2025-01-29",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "firstName": "Raj",
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Social Media Post",
        "taskDescription": "Draft and schedule a post for social media.",
        "taskDate": "2025-01-30",
        "category": "Marketing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Expense Report",
        "taskDescription": "Prepare and submit the expense report.",
        "taskDate": "2025-01-31",
        "category": "Finance",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ],
    "taskCount": {
      "active": 2,
      "newTask": 1,
      "completed": 0,
      "failed": 0
    }
  }
];


  const admin = [
    {
      "id": 1,
      "email": "admin@me.com",
      "password": "123"
    }
  ];

  export const setLocalStorage =()=>{
    localStorage.setItem('employees',JSON.stringify(employees));
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const admin = JSON.parse(localStorage.getItem('admin')) || [];
    return { employees, admin };
  };
  
  