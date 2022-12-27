import { DashboardMolecules } from "../molecules"

export const DashboardOrganism = () => {
    return (
        <>
            <DashboardMolecules.DashboardHeader />
            <DashboardMolecules.DashboardCards />
            <DashboardMolecules.DashboardActions />
        </>
    )
}