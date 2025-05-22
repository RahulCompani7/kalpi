"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Card = {
  id: number;
  title: string;
  content: React.ReactNode | string;
  imageUrl: string;
};

export const LayoutGrid = () => {
  const [selected, setSelected] = useState<Card | null>(null);

  // Close modal on ESC key
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && selected) {
        setSelected(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const cards: Card[] = [
    {
      id: 1,
      title: "Fast Performance",
      imageUrl:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">Fast Performance</h3>
          <p>
            Our app is optimized to deliver blazing fast speeds, ensuring smooth user
            experience everywhere.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "Secure by Design",
      imageUrl:
        "https://images.pexels.com/photos/5380671/pexels-photo-5380671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">Secure by Design</h3>
          <p>
            Security is our priority. We implement best practices to keep your data safe and
            private.
          </p>
        </>
      ),
    },
    {
      id: 3,
      title: "Highly Customizable",
      imageUrl:
        "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">Highly Customizable</h3>
          <p>
            Adjust settings and features easily to fit your unique business needs and workflow.
          </p>
        </>
      ),
    },
    {
      id: 4,
      title: "Detailed Analytics",
      imageUrl:
        "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">Detailed Analytics</h3>
          <p>Get deep insights with comprehensive analytics dashboards and reports.</p>
        </>
      ),
    },
    {
      id: 5,
      title: "24/7 Support",
      imageUrl:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
          <p>Our expert support team is available round the clock to assist you.</p>
        </>
      ),
    },
    {
      id: 6,
      title: "Cloud Integration",
      imageUrl:
        "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      content: (
        <>
          <h3 className="text-2xl font-bold mb-2">Cloud Integration</h3>
          <p>
            Seamlessly integrate with your favorite cloud services for better flexibility.
          </p>
        </>
      ),
    },
  ];

  return (
    <>
      {/* Grid of cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            layoutId={`card-${card.id}`}
            className="relative cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white"
            onClick={() => setSelected(card)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setSelected(card);
            }}
          >
            <motion.img
              layoutId={`image-${card.id}`}
              src={card.imageUrl}
              alt={card.title}
              className="w-full h-48 object-cover"
              loading="lazy"
              draggable={false}
            />
            {/* Title overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4 text-lg font-semibold select-none">
              {card.title}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Overlay + Expanded selected card */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Dark overlay */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-60 z-40 cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
              aria-label="Close modal overlay"
              role="button"
              tabIndex={-1}
            />

            {/* Modal expanded card */}
            <motion.div
              layoutId={`card-${selected.id}`}
              className="fixed top-1/2 left-1/2 max-w-xl w-[90vw] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-2xl z-50 p-6 flex flex-col"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
            >
              <motion.img
                layoutId={`image-${selected.id}`}
                src={selected.imageUrl}
                alt={selected.title}
                className="w-full h-64 object-cover rounded-md mb-4 select-none"
                loading="lazy"
                draggable={false}
              />
              <div className="overflow-auto max-h-[300px]" id="modal-title">
                {selected.content}
              </div>
              <button
                onClick={() => setSelected(null)}
                className="mt-6 self-end text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                aria-label="Close modal"
              >
                Close
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
