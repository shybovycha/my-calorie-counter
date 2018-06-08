-- ORDER MATTERS IN THESE DELETES --
DROP TABLE IF EXISTS workouts;
DROP TABLE IF EXISTS excercises;

DROP TABLE IF EXISTS meals_ingridients;
DROP TABLE IF EXISTS ingridients;
DROP TABLE IF EXISTS nutrition;
DROP TABLE IF EXISTS meals;

DROP TABLE IF EXISTS measurements;
DROP TABLE IF EXISTS users;

CREATE TABLE excercises (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, calories INT NOT NULL); -- calories per 1hr of excercise
CREATE TABLE ingridients (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL, calories INT NOT NULL, carbohydrates FLOAT, fats FLOAT, proteins FLOAT); -- calories, carbs, proteins and fats - per 100g
CREATE TABLE meals (id SERIAL PRIMARY KEY, name VARCHAR(255) NOT NULL);
CREATE TABLE meals_ingridients (meal_id INT NOT NULL REFERENCES meals (id), ingridient_id INT NOT NULL REFERENCES ingridients (id), ingridient_amount FLOAT NOT NULL, PRIMARY KEY (meal_id, ingridient_id));
CREATE TABLE workouts (id SERIAL PRIMARY KEY, created_at TIMESTAMP NOT NULL DEFAULT NOW(), excercise_id INT NOT NULL REFERENCES excercises (id), duration INT NOT NULL); -- duration in minutes
CREATE TABLE nutrition (id SERIAL PRIMARY KEY, created_at TIMESTAMP NOT NULL DEFAULT NOW(), meal_id INT NOT NULL REFERENCES meals (id), amount FLOAT NOT NULL); -- amount in grams
CREATE TABLE measurements (id SERIAL PRIMARY KEY, created_at TIMESTAMP NOT NULL DEFAULT NOW(), weight FLOAT NOT NULL, fat_percent FLOAT DEFAULT 0); -- weight in kilograms, fat_percent between 0 and 1, where 1 is 100% and 0 is 0%
CREATE TABLE users (id SERIAL PRIMARY KEY, email VARCHAR(255) NOT NULL, password_hash VARCHAR(255) NOT NULL, gender VARCHAR(1) NOT NULL); -- gender is either M for male or F for female
