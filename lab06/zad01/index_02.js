// Z użyciem mechanizmu async-await
const { Client } = require("pg")
const client = new Client({
    user: "postgres",
    database: 'tswDB',
    password: "tajne",
});
//-------------------------------------------------------
// UWAGA!!!
//-------------------------------------------------------
// Dane, takie jak użytkownik i hasło, raczej nie powinny
// być „wbudowane w kod”. Zamiast tego użyć można/należy
// modułu „dotenv” (https://github.com/motdotla/dotenv)
// Wykorzystanie modułu jest proste i zostało czytelnie
// opisane na wymienionej powyżej stronie.
//-------------------------------------------------------

// Gdybyśmy byli „wewnątrz modułu node'owego” to nie byłaby
// potrzebna zewnętrzna funkcja anonimowa – patrz dokumentacja.
(async () => {
    await client.connect();

    let pswdK = "crypt('kasia', gen_salt('bf'))";
    let pswdT = "crypt('tomek', gen_salt('bf'))";

    await client.query(`INSERT INTO portaluser VALUES ('kasia', ${pswdK});`);
    await client.query(`INSERT INTO portaluser VALUES ('tomek', ${pswdT});`);
    const res = await client.query("SELECT * FROM portaluser");

    console.dir(res.rows);

    await client.end();
})();

