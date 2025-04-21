import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: 1,
    title: "Página web de Trabajo Remoto",
    description: "Aprende como puedes unirte y hacer tu trabajo de forma remota. Plataforma completa con recursos, guías y herramientas para profesionales que buscan trabajar remotamente.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    demoUrl: "https://trabajo-remoto.example.com",
    githubUrl: "https://github.com/example/trabajo-remoto",
    featured: true
  },
  {
    id: 2,
    title: "Conversor de Unidades",
    description: "Interesante sistema de conversion de unidades, de la categoria que escojas, con valor de tiempo actual. Herramienta precisa y fácil de usar para conversiones entre diferentes sistemas de medida.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=400&fit=crop",
    tags: ["C++", "Algoritmos", "Matemáticas"],
    demoUrl: "https://conversor.example.com",
    githubUrl: "https://github.com/example/conversor-unidades",
    featured: false
  },
  {
    id: 3,
    title: "Caja Registradora",
    description: "Sistema de punto de venta con interfaz intuitiva para gestionar transacciones comerciales. Incluye gestión de inventario, reportes de ventas y sistema de facturación.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    tags: ["Java", "JavaFX", "SQL"],
    demoUrl: "https://caja-registradora.example.com",
    githubUrl: "https://github.com/example/caja-registradora",
    featured: true
  },
  {
    id: 4,
    title: "Gestor de Inventario",
    description: "Aplicación robusta desarrollada en Python para administrar inventarios empresariales. Permite seguimiento en tiempo real, alertas de stock y generación de informes detallados.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=400&fit=crop",
    tags: ["Python", "PyQt", "SQLite"],
    demoUrl: "https://inventario.example.com",
    githubUrl: "https://github.com/example/gestor-inventario",
    featured: false
  },
  {
    id: 5,
    title: "Base de Datos de Biblioteca",
    description: "Sistema completo para gestión bibliotecaria desarrollado con Python y Django. Incluye catálogo digital, sistema de préstamos y gestión de usuarios.",
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=800&h=400&fit=crop",
    tags: ["Python", "Django", "PostgreSQL"],
    demoUrl: "https://biblioteca.example.com",
    githubUrl: "https://github.com/example/biblioteca-db",
    featured: true
  }
];

