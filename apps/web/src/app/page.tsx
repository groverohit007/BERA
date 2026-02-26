'use client';

import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center gap-6 px-6 text-center">
      <motion.h1
        className="text-4xl font-bold tracking-tight sm:text-6xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
      >
        BERA
      </motion.h1>
      <p className="text-lg text-slate-300">BEST EVER RESUME — AI powered</p>
      <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Beats the bots. Impress the boss.</p>
    </main>
  );
}
