import { useState, useEffect } from "react";

export interface Profile {
  username: string;
  handle: string;
  initials: string;
  pfp?: string;
  tagline: string;
  bio: string;
  description?: string;
  status: "online" | "idle" | "dnd" | "offline";
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  color: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  language?: string;
  languageColor?: string;
  tags: string[];
}

export interface OngoingProject extends Project {
  progress: number;
}

const base = import.meta.env.BASE_URL;

function url(path: string) {
  return `${base}${path}`.replace(/\/\//g, "/");
}

async function get<T>(path: string): Promise<T> {
  const res = await fetch(url(path));
  if (!res.ok) throw new Error(`${path} failed`);
  return res.json();
}

export function useProfile() {
  const [data, setData] = useState<Profile | null>(null);
  useEffect(() => { get<Profile>("data/profile.json").then(setData).catch(console.error); }, []);
  return data;
}

export function useBadges() {
  const [data, setData] = useState<Badge[]>([]);
  useEffect(() => { get<Badge[]>("data/badges.json").then(setData).catch(console.error); }, []);
  return data;
}

export function useProjects() {
  const [data, setData] = useState<Project[]>([]);
  useEffect(() => { get<Project[]>("data/projects.json").then(setData).catch(console.error); }, []);
  return data;
}

export function useOngoing() {
  const [data, setData] = useState<OngoingProject[]>([]);
  useEffect(() => { get<OngoingProject[]>("data/ongoing.json").then(setData).catch(console.error); }, []);
  return data;
}
