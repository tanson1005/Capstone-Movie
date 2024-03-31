import { Fragment, Suspense, useEffect } from "react";
import { Outlet, Route } from "react-router";

export const DetailTemplate = (props) => {
    const { Component, ...restProps } = props;
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Fragment>
            <Suspense>
              <Outlet></Outlet>
            </Suspense>
        </Fragment>
    );
};
