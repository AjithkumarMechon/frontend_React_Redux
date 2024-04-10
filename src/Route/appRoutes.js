import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const ProductComponent = lazy(() => import("../Component/index"));
function AppRoutes() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/">
            <Route index element={<ProductComponent />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default AppRoutes;
