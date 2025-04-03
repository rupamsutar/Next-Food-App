import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    // throw new Error("Meals didnt fetch");
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const meals = db.prepare('SELECT * FROM meals').all();
    return meals;
}

export function getMeal(slug) {
    return db.prepare('SELECT * FROM meals where slug = ?').get(slug);
}