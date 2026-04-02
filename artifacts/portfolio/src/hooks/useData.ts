import { useState, useEffect } from "react";

export interface Profile {
  username: string;
  handle: string;
  initials: string;
  tagline: string;
  bio: string;
  status: string;
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  color: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  tags: string[];
}

export interface OngoingProject extends Project {
  progress: number;
}

const BASE = import.meta.env.BASE_URL;

function buildUrl(path: string) {
  return `${BASE}${path}`.replace(/\/\//g, "/");
}

async function fetchJson<T>(path: string): Promise<T> {
  const res = await fetch(buildUrl(path));
  if (!res.ok) throw new Error(`Failed to fetch ${path}`);
  return res.json();
}

export function useProfile() {
  const [data, setData] = useState<Profile | null>(null);
  useEffect(() => {
    fetchJson<Profile>("data/profile.json").then(setData).catch(console.error);
  }, []);
  return data;
}

export function useBadges() {
  const [data, setData] = useState<Badge[]>([]);
  useEffect(() => {
    fetchJson<Badge[]>("data/badges.json").then(setData).catch(console.error);
  }, []);
  return data;
}

export function useProjects() {
  const [data, setData] = useState<Project[]>([]);
  useEffect(() => {
    fetchJson<Project[]>("data/projects.json").then(setData).catch(console.error);
  }, []);
  return data;
}

export function useOngoing() {
  const [data, setData] = useState<OngoingProject[]>([]);
  useEffect(() => {
    fetchJson<OngoingProject[]>("data/ongoing.json").then(setData).catch(console.error);
  }, []);
  return data;
}
