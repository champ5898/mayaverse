"use client";
import { useState, useEffect, FormEvent } from "react";
import { supabase } from "@/utils/supabaseClient";

interface Movie {
  id: number;
  title: string;
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchMovies = async () => {
    const { data, error } = await supabase
      .from("movies")
      .select("*")
      .order("id", { ascending: false });
    if (error) setError(error.message);
    else setMovies((data as Movie[]) || []);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleAddMovie = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const { error } = await supabase.from("movies").insert([{ title }]);
    if (error) setError(error.message);
    setTitle("");
    setLoading(false);
    fetchMovies();
  };

  return (
    <main style={{ maxWidth: 500, margin: "0 auto", padding: 32 }}>
      <h1>Movies</h1>
      <form onSubmit={handleAddMovie} style={{ marginBottom: 24 }}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ width: "70%", marginRight: 8 }}
        />
        <button type="submit" disabled={loading}>
          Add Movie
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </main>
  );
}
