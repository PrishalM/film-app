import React from "react";
import { Routes, Route } from "react-router-dom";

import {
  IndexPage,
  AboutPage,
  SearchPage,
  WorkPage,
  NotFoundPage,
} from "./pages";

import { default as Layout } from "./layouts";

import "./App.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/search">
          <Route path="/search" element={<SearchPage />} />
          <Route path=":name" element={<WorkPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
