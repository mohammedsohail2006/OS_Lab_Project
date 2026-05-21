# 🖥️ CPU Scheduling Simulator (C)

## 📌 Project Overview
The CPU Scheduling Simulator is a C-based program developed to demonstrate various CPU scheduling algorithms used in operating systems. It helps in understanding how processes are allocated CPU time and executed efficiently.

This project simulates different scheduling techniques and calculates important parameters such as waiting time and turnaround time.

---

## 🎯 Objectives
- To implement CPU scheduling algorithms in C
- To understand process execution flow
- To calculate waiting time and turnaround time
- To compare performance of scheduling algorithms

---

## ⚙️ Features
- Implementation of:
  - First Come First Serve (FCFS)
  - Shortest Job First (SJF)
  - Round Robin (RR)
- User input for:
  - Number of processes
  - Burst time
  - Arrival time (if applicable)
- Displays:
  - Waiting Time
  - Turnaround Time
  - Average values

---

## 🛠️ Technologies Used
- C Programming Language
- Basic Data Structures (Arrays)

---

## 📂 Project Structure
CPU-Scheduler/
│
├── main.c  
├── fcfs.c  
├── sjf.c  
├── round_robin.c  
├── priority.c  
└── README.md  

---

## ▶️ How to Run

1. Clone the repository:
   git clone https://github.com/mohammedsohail2006/OS_Lab_Project.git

2. Navigate to the folder:
   cd cpu-scheduler

3. Compile the program:
   gcc main.c -o scheduler

4. Run the program:
   ./scheduler

---

## 📊 Algorithms Implemented

### 1. First Come First Serve (FCFS)
- Processes are executed in the order of arrival
- Simple but inefficient for long processes

### 2. Shortest Job First (SJF)
- Process with shortest burst time executes first
- Minimizes average waiting time

### 3. Round Robin (RR)
- Each process gets a fixed time slice (quantum)
- Ensures fairness among processes
  
---

## 📈 Output
- Execution order of processes
- Waiting Time for each process
- Turnaround Time for each process
- Average Waiting Time
- Average Turnaround Time

---

## 🚧 Limitations
- Console-based program
- No graphical visualization
- Limited to basic scheduling algorithms

---

## 🔮 Future Scope
- Add Gantt chart visualization
- Implement GUI version
- Add more advanced scheduling algorithms
- Improve user interface

---

## 👨‍💻 Author
Mohammed Sohail

---

## 📜 License
This project is for educational purposes only.
