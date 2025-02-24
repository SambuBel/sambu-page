"use client";
import React from 'react';
import ItemsList from './ItemsList';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 w-full flex justify-between items-center px-6 shadow-md z-50">
      <div className="flex-shrink-0">
        <a className="btn btn-ghost text-md">Sambuceti Belén / Sambu</a>
      </div>
      <ItemsList />
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/profile.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
