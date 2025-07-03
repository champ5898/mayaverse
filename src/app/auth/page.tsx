"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/utils/supabaseClient";
import type { User } from "@supabase/supabase-js";

export default function AuthPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );
    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignIn = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) setError(error.message);
    setLoading(false);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <main style={{ maxWidth: 400, margin: "0 auto", padding: 32 }}>
      <h1>Authentication</h1>
      {user ? (
        <>
          <p>
            Signed in as: <b>{user.email ?? "No email"}</b>
          </p>
          <button onClick={handleSignOut}>Sign Out</button>
        </>
      ) : (
        <>
          <form onSubmit={handleSignIn} style={{ marginBottom: 24 }}>
            <h2>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 8 }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 8 }}
            />
            <button type="submit" disabled={loading}>
              Sign In
            </button>
          </form>
          <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 8 }}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ width: "100%", marginBottom: 8 }}
            />
            <button type="submit" disabled={loading}>
              Sign Up
            </button>
          </form>
        </>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </main>
  );
}
