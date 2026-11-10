function multiplyValue(value: number, multiplier: number = 2): number {
  return value * multiplier;
}

multiplyValue(10);
multiplyValue(10, 5);
multiplyValue(7, 0);

function processInput(
  value: string | number | boolean,
): string | number | boolean {
  if (typeof value === "string") {
    return value.trim().toLowerCase();
  } else if (typeof value === "number") {
    return value * 2;
  } else {
    return value === true ? "Active" : "Inactive";
  }
}

function formatCoordinate(
  coordinate: readonly [number, number, string],
): string {
  const [lattitude, longitude, locationName] = coordinate;
  return "Location: " + locationName + ", " + lattitude + ", " + longitude;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  const result: T[] = [];

  for (let i = 0; i < arrays.length; i++) {
    result.push(...arrays[i]);
  }
  return result;
}

interface Course {
  title: string;
  students: number;
  isPublished: boolean;
}

function getPopularCourses(Courses: Course[], minStudents: number): Course[] {
  let result: Course[] = [];

  for (let i = 0; i < Courses.length; i++) {
    if (Courses[i].isPublished == true && Courses[i].students >= minStudents) {
      result.push(Courses[i]);
    }
  }
  return result;
}

const courses: Course[] = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true },
];

function pluckValues<T, K extends keyof T>(items: T[], key: K): T[K][] {
  const result: T[K][] = [];

  for (let i = 0; i < items.length; i++) {
    const value = items[i][key];

    result.push(value);
  }

  return result;
}

const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" },
];

pluckValues(users, "name");
pluckValues(users, "id");

class Employee {
  protected name: string;
  private baseSalary: number;

  constructor(name: string, baseSalary: number) {
    this.name = name;
    this.baseSalary = baseSalary;
  }

  getDetails(): string {
    return "Employee: " + this.name + " Base Salary: " + this.baseSalary;
  }
}

class Manager extends Employee {
  private department: string;

  constructor(name: string, baseSalary: number, department: string) {
    super(name, baseSalary);

    this.department = department;
  }

  getRoleInfo(): string {
    return "Manager of " + this.department + ": " + this.name;
  }
}

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

async function validateAgeAsync(age: number): Promise<string> {
  {
    if (age < 18) {
      throw new Error("Access Denied: Must be 18 or older");
    }

    await new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
    return "Access Granted";
  }
}

await validateAgeAsync(20);

await validateAgeAsync(15);
