const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare monthly report",
        taskDescription: "Compile and submit monthly sales report.",
        taskDate: "2026-02-20",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Update client database",
        taskDescription: "Clean outdated client records.",
        taskDate: "2026-02-10",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Team meeting",
        taskDescription: "Attend sprint planning meeting.",
        taskDate: "2026-02-18",
        category: "Meeting"
      }
    ]
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design login page",
        taskDescription: "Create responsive UI for login screen.",
        taskDate: "2026-02-22",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix navbar bug",
        taskDescription: "Resolve mobile menu overflow issue.",
        taskDate: "2026-02-12",
        category: "Bug Fix"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "API integration",
        taskDescription: "Integrate user authentication API.",
        taskDate: "2026-02-15",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "UI review",
        taskDescription: "Review dashboard UI with team.",
        taskDate: "2026-02-19",
        category: "Review"
      }
    ]
  },
  {
    id: 3,
    firstName: "Aditya",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write API docs",
        taskDescription: "Document employee endpoints.",
        taskDate: "2026-02-21",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Unit testing",
        taskDescription: "Add tests for auth module.",
        taskDate: "2026-02-11",
        category: "Testing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Code review",
        taskDescription: "Review pull requests from juniors.",
        taskDate: "2026-02-17",
        category: "Review"
      }
    ]
  },
  {
    id: 4,
    firstName: "Rohan",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Deploy staging build",
        taskDescription: "Deploy latest build to staging server.",
        taskDate: "2026-02-23",
        category: "Deployment"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Optimize images",
        taskDescription: "Compress images for faster load time.",
        taskDate: "2026-02-09",
        category: "Optimization"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Server migration",
        taskDescription: "Move services to new server.",
        taskDate: "2026-02-14",
        category: "Infrastructure"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Monitor logs",
        taskDescription: "Check error logs and alerts.",
        taskDate: "2026-02-18",
        category: "Monitoring"
      }
    ]
  },
  {
    id: 5,
    firstName: "Kavya",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer support follow-up",
        taskDescription: "Respond to pending support tickets.",
        taskDate: "2026-02-20",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Create FAQ page",
        taskDescription: "Add frequently asked questions section.",
        taskDate: "2026-02-08",
        category: "Content"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Performance testing",
        taskDescription: "Run load tests on API endpoints.",
        taskDate: "2026-02-24",
        category: "Testing"
      }
    ]
  }
];

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return { employees, admin }
}

