# Lab 3.02: SQL (202302) - Proyecto de Normalización y Consultas SQL

Este proyecto consiste en la normalización de dos bases de datos (una de blogs y una de aerolíneas), así como la creación de las tablas necesarias y la escritura de las consultas SQL requeridas.

## Parte 1: Normalización de la Base de Datos de Blogs

### Descripción
La base de datos original contenía una tabla con información sobre blogs, incluyendo el autor, el título, el conteo de palabras y el número de vistas. Para evitar redundancia y mejorar la estructura de la base de datos, hemos normalizado la información en dos tablas: **Autores** y **Blogs**.

### Tablas Creadas

1. **Autores**: Contiene la información de los autores.
2. **Blogs**: Contiene la información de los blogs, con una clave foránea que referencia a los autores.

### Script DDL para Crear las Tablas

```sql
CREATE TABLE Authors (
    author_id INT PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(100) NOT NULL
);

CREATE TABLE Blogs (
    blog_id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT,
    title VARCHAR(255) NOT NULL,
    word_count INT,
    views INT,
    FOREIGN KEY (author_id) REFERENCES Authors(author_id)
);
```

## Parte 2: Normalización de la Base de Datos de Aerolíneas

### Descripción
La base de datos original contenía información sobre los clientes, los vuelos y las reservas, todo en una sola tabla. Para normalizarla, dividimos la información en tres tablas: **Clientes**, **Vuelos** y **Reservas**.

### Tablas Creadas

1. **Clientes**: Almacena la información de los clientes.
2. **Vuelos**: Contiene la información sobre los vuelos, como el número de vuelo, el tipo de aeronave y la distancia.
3. **Reservas**: Registra las reservas de los clientes, con una clave foránea tanto para los clientes como para los vuelos.

### Script DDL para Crear las Tablas
```sql
CREATE TABLE Customers (
    customer_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_name VARCHAR(100) NOT NULL,
    customer_status VARCHAR(20) NOT NULL
);

CREATE TABLE Flights (
    flight_id INT PRIMARY KEY AUTO_INCREMENT,
    flight_number VARCHAR(20) NOT NULL,
    aircraft VARCHAR(100) NOT NULL,
    total_seats INT,
    flight_mileage INT
);

CREATE TABLE Reservations (
    reservation_id INT PRIMARY KEY AUTO_INCREMENT,
    customer_id INT,
    flight_id INT,
    customer_mileage INT,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id),
    FOREIGN KEY (flight_id) REFERENCES Flights(flight_id)
);
```

## Parte 3: Consultas SQL

### 1. Total de Vuelos en la Base de Datos
```sql
SELECT COUNT(*) AS total_flights FROM Flights;
```

### 2. Distancia Promedio de los Vuelos
```sql
SELECT AVG(flight_mileage) AS average_flight_distance FROM Flights;
```

### 3. Promedio de Asientos en los Vuelos
```sql
SELECT AVG(total_seats) AS average_seats FROM Flights;
```

### 4. Promedio de Millas Recorridas por Clientes Agrupados por Estado
```sql
SELECT c.customer_status, AVG(r.customer_mileage) AS average_mileage
FROM Reservations r
JOIN Customers c ON r.customer_id = c.customer_id
GROUP BY c.customer_status;
```

### 5. Máximo de Millas Recorridas por Clientes Agrupados por Estado
```sql
SELECT c.customer_status, MAX(r.customer_mileage) AS max_mileage
FROM Reservations r
JOIN Customers c ON r.customer_id = c.customer_id
GROUP BY c.customer_status;
```

### 6. Total de Aeronaves cuyo Nombre Contiene "Boeing"
```sql
SELECT COUNT(*) AS total_boeing_aircraft
FROM Flights
WHERE aircraft LIKE '%Boeing%';
```

### 7. Vuelos con Distancia Entre 300 y 2000 Millas
```sql
SELECT * FROM Flights
WHERE flight_mileage BETWEEN 300 AND 2000;
```

### 8. Distancia Promedio de Vuelo Reservada Agrupada por Estado de Cliente
```sql
SELECT c.customer_status, AVG(f.flight_mileage) AS average_flight_distance
FROM Reservations r
JOIN Flights f ON r.flight_id = f.flight_id
JOIN Customers c ON r.customer_id = c.customer_id
GROUP BY c.customer_status;
```

### 9. Aeronave Más Reservada por los Clientes con Estado "Gold"
```sql
SELECT f.aircraft, COUNT(*) AS reservation_count
FROM Reservations r
JOIN Flights f ON r.flight_id = f.flight_id
JOIN Customers c ON r.customer_id = c.customer_id
WHERE c.customer_status = 'Gold'
GROUP BY f.aircraft
ORDER BY reservation_count DESC
LIMIT 1;
```

## Conclusión
Este ejercicio incluye la normalización de las bases de datos para mejorar su estructura y eficiencia, y la creación de consultas SQL para obtener datos importantes sobre los vuelos y los clientes. Los scripts SQL están listos para ser ejecutados en un entorno de base de datos.