import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Box } from "@chakra-ui/react";
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumbs:React.FC = () => {
    const location = useLocation();

    let currentLink:string = "";

    const crumbs = location.pathname.split("/")
        .filter(crumb => crumb !== '')
        .map(crumb => {
            currentLink+= `/${crumb}`

            return (
                <BreadcrumbItem>
                    <BreadcrumbLink as={Link} to={currentLink}>
                        {crumb}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            );
        });

    return(
        <Box>
            <Breadcrumb fontWeight='medium' fontSize='sm'>
                {crumbs}
            </Breadcrumb>
        </Box>
    );
}

export default Breadcrumbs;