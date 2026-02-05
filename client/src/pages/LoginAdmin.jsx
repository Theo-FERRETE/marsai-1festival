import React from "react";

export default function LoginAdmin() {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2>Connexion Admin</h2>

        <input
          type="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Mot de passe"
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Se connecter
        </button>

        <div style={styles.divider}>ou</div>

        <button type="button" style={styles.googleButton}>
          Se connecter avec Google
        </button>
      </form>
    </div>
  );
}