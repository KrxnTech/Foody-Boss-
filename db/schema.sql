CREATE DATABASE IF NOT EXISTS food_manager;
USE food_manager;

CREATE TABLE IF NOT EXISTS recipes (
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    ingredients TEXT,
    instructions TEXT
);

INSERT INTO recipes (id, name, description, ingredients, instructions)
VALUES
('r1', 'Paneer Butter Masala', 'A rich and creamy North Indian curry.', 'Paneer, Butter, Tomato, Cream, Spices', 'Cook tomatoes in butter, blend into sauce, add paneer, simmer for 10 mins.'),
('r2', 'Veg Fried Rice', 'Classic Indo-Chinese style fried rice.', 'Rice, Vegetables, Soy Sauce, Oil', 'Stir-fry vegetables, add cooked rice, mix with soy sauce and spices.'),
('r3', 'Pasta Alfredo', 'Creamy Italian pasta with cheese sauce.', 'Pasta, Cream, Butter, Garlic, Cheese', 'Boil pasta, cook sauce, mix and serve hot.'),
('r4', 'Maggie Masala', 'Quick and spicy instant noodles.', 'Noodles, Water, Masala Packet, Vegetables', 'Boil noodles, add masala and veggies, cook for 2 minutes.'),
('r5', 'Cheese Sandwich', 'Simple and tasty sandwich.', 'Bread, Cheese, Butter', 'Spread butter, add cheese, toast for 3 mins.');
('r6', 'Tomato Soup', 'Warm soup for winter evenings.', 'Tomato, Salt, Cream', 'Boil tomatoes, blend, add cream.');
('r7','Cream Role','A soft, golden sponge cake rolled with fluffy whipped cream — light, creamy, and sweet enough to destroy your diet and your regrets in one bite.','1 cup all-purpose flour 3 eggs ½ cup sugar 1 tsp vanilla extract 1 cup heavy cream 2 tbsp powdered sugar',' Preheat oven to 180°C and line a baking tray with parchment paper. Whisk eggs and sugar until fluffy; add flour and vanilla. Spread the batter evenly on the tray and bake for 10 minutes. Let it cool, then spread whipped cream and roll gently. Chill for 30 minutes and dust with powdered sugar before serving.')
