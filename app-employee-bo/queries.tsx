import { gql } from "@apollo/client";

// noinspection JSUnusedGlobalSymbols
export const LOGIN = gql`
    mutation createAuthToken($data: CreateAuthTokenInput!) {
        createAuthToken(data: $data) {
            token
            refreshToken
        }
    }
`;
export const REFRESH_LOGIN = gql`
    mutation refreshLogin($data: RefreshAuthTokenInput!) {
        refreshAuthToken(data: $data) {
            token
            refreshToken
        }
    }
`;
export const CREATE_NOTIFICATION = gql`
    mutation createNotification($data: CreateNotificationInput!) {
        createNotification(data: $data) {
            id
        }
    }
`
export const CREATE_USER = gql`
    mutation createUser($data: CreateUserInput!) {
        createUser(data: $data) {
            id
        }
    }
`;
export const CREATE_EMPLOYEE = gql`
    mutation createEmployee($data: CreateEmployeeInput!) {
        createEmployee(data: $data) {
            id
        }
    }
`;
export const CREATE_PERIOD = gql`
    mutation createPeriod($data: CreateEperiodInput!) {
        createPeriod(data: $data) {
            id
        }
    }
`;
export const CREATE_EINVOICE = gql`
    mutation createEinvoice($data: CreateEinvoiceInput!) {
        createEinvoice(data: $data) {
            id
        }
    }
`;
export const CREATE_REPORT = gql`
    mutation createReport($data: CreateReportInput!) {
        createReport(data: $data) {
            id
        }
    }
`;
export const CREATE_CUSTOMER = gql`
    mutation createCustomer($data: CreateCustomerInput!) {
        createCustomer(data: $data) {
            id
        }
    }
`;
export const CREATE_CONTRACT = gql`
    mutation createContract($data: CreateContractInput!) {
        createContract(data: $data) {
            id
        }
    }
`;
export const CREATE_SIMULATION = gql`
    mutation createSimulation($data: CreateSimulationInput!) {
        createSimulation(data: $data) {
            id
        }
    }
`;
export const CREATE_PROJECT = gql`
    mutation createProject($data: CreateProjectInput!) {
        createProject(data: $data) {
            id
        }
    }
`;
export const CREATE_CINVOICE = gql`
    mutation createCinvoice($data: CreateCinvoiceInput!) {
        createCinvoice(data: $data) {
            id
        }
    }
`;
export const CREATE_CPERIOD = gql`
    mutation createCperiod($data: CreateCperiodInput!) {
        createCperiod(data: $data) {
            id
        }
    }
`;
export const CREATE_CPAYMENT = gql`
    mutation createCpayment($data: CreateCpaymentInput!) {
        createCpayment(data: $data) {
            id
        }
    }
`;
export const CREATE_PAYSLIP = gql`
    mutation createPayslip($data: CreatePayslipInput!) {
        createPayslip(data: $data) {
            id
        }
    }
`;

export const GET_CURRENT_USER = gql`
    query getCurrentUser {
        getCurrentUser {
            id
            email
            firstName
            lastName
            createdAt
            updatedAt
            status
            role
        }
    }
`;
export const GET_NOTIFICATION = gql`
    query getNotification($id: ID!) {
        getNotification(id: $id) {
            id
            createdAt
            status
            tenant
            tenantCode
            tenantName
            organization
            organizationCode
            organizationName
            template
            recipient
            sender
            variables
            type
            locale
            country
            subject
            attachments
            bodyFile {
                available
                url
            }
            bodyTextFile {
                available
                url
            }
        }
    }
`;
export const GET_ORGANIZATION = gql`
    query getOrganization($id: ID!) {
        getOrganization(id: $id) {
            id
            name
            fullName
            shortName
            legalName
            createdAt
            updatedAt
            status
            code
            locale
            country
            city
            street
            zipCode
            overline
            complement
            state
            owner
            ownerEmail
            ownerFirstName
            ownerLastName
            tenant
            faviconImage {
                available
                url
            }
            appleTouchImage {
                available
                url
            }
            logoImage {
                available
                url
            }
            logoAltImage {
                available
                url
                
            }
            bannerImage {
                available
                url
            }
            mainImage {
                available
                url
            }
            websiteUrl
            twitterUrl
            facebookUrl
            instagramUrl
            linkedinUrl
            youtubeUrl
            pinterestUrl
            tumblrUrl
            flickrUrl
            redditUrl
            tiktokUrl
            vimeoUrl
            snapchatUrl
        }
    }
`;
export const GET_TENANT = gql`
    query getTenant($id: ID!) {
        getTenant(id: $id) {
            id
            code
            name
        }
    }
`;
export const GET_USER = gql`
    query getUser($id: ID!) {
        getUser(id: $id) {
            id
            email
            firstName
            lastName
            createdAt
            updatedAt
            status
            role
        }
    }
`;
export const GET_EMPLOYEE = gql`
    query getEmployee {
        getEmployee {
            id
            code
            tenant
            email
            firstName
            externalId
            lastName
            createdAt
            updatedAt
            status
            statAccountAmount
            statGlobalBilledAmount
            statExpensesOfMonth
        }
    }
`;
export const GET_EMPLOYEE_STATS = gql`
    query getEmployeeStats {
        getEmployeeStats {
            statAccountAmount
            statGlobalBilledAmount
            statExpenseOfMonth
            statExpensesOfYear
            statExpenseForecast
            statIncomeOfMonth
            statIncomesOfYear
            statIncomeForecast
            statPeeByMonth
            statPerByMonth
            statSavingsByMonth
        }
    }
`;
export const GET_PERIOD = gql`
    query getPeriod($id: ID!) {
        getPeriod(id: $id) {
            dateStart
            dateEnd
            workedDay
            periodPercent
            periodTurnover
            internalFees
            periodExpense
            periodChargeProvided
            baseAccount
            taxedSalary
            employerContributions
            employeeContributions
            salary
            peeAmount
            perAmount
            incomeTaxes
            commercialFee
            craUrl
            payslipUrl
            
        }
    }
`;
export const GET_EINVOICE = gql`
    query getEinvoice($id: ID!) {
        getEinvoice(id: $id) {
            id
            project
            customer
            externalId
            tenant
        }
    }
`;
export const GET_REPORT = gql`
    query getReport($id: ID!) {
        getReport(id: $id) {
         id
         tenant
        }
    }
`;

export const GET_EXPENSE = gql`
    query getExpense($id: ID!) {
        getExpense(id: $id) {
         id
         tenant
         name
         cost
         vatCost
         vatPercent
         mooncardId
         date
         justify
         display
        }
    }
`;

export const GET_PAYSLIP = gql`
    query getPayslip($id: ID!) {
        getPayslip(id: $id) {
            id
            code
            date
            tenant
            employee
            employeeEmail
            employeeFirstName
            employeeLastName
            employeePhone
            externalId
            mainFile {
                available
                url
            }
        }
    }
`;
export const GET_CUSTOMER = gql`
    query getCustomer($id: ID!) {
        getCustomer(id: $id) {
            id
            code
            tenant
            name
        }
    }
`;
export const GET_CONTRACT = gql`
    query getContract($id: ID!) {
        getContract(id: $id) {
            id
            code
            tenant
            employee
            customer
            code
            rate
            project
            locked
            billingMode
            is_amendment
        }
    }
`;
export const GET_SIMULATION = gql`
    query getSimulation($id: ID!) {
        getSimulation(id: $id) {
            id
            type
            result
            values
            tenant
            ownerEmail
            ownerName
            ownerFirstName
            date
            status
            failureDetails
        }
    }
`;
export const GET_PROJECT = gql`
    query getProject($id: ID!) {
        getProject(id: $id) {
            id
            tenant
            customer
            code
        }
    }
`;
export const GET_CINVOICE = gql`
    query getCinvoice($id: ID!) {
        getCinvoice(id: $id) {
            id
            project
            customer
            externalId
            tenant
        }
    }
`;
export const GET_CPERIOD = gql`
    query getCperiod($id: ID!) {
        getCperiod(id: $id) {
            id
            createdAt
            updatedAt
            project
            customer 
            tenant 
          
        }
    }
`;
export const GET_CPAYMENT = gql`
    query getCpayment($id: ID!) {
        getCpayment(id: $id) {
            id
            createdAt
            updatedAt
            project
            customer 
            tenant 
          
        }
    }
`;
export const GET_ORGANIZATION_BY_CODE = gql`
    query getOrganizationByCode($code: String!) {
        getOrganizationByCode(code: $code) {
            id
            code
            name
        }
    }
`;

export const FIND_NOTIFICATIONS = gql`
    query findNotifications($offset: String, $limit: Int) {
        findNotifications(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                createdAt
                status
                tenant
                tenantCode
                tenantName
                organization
                organizationCode
                organizationName
                template
                recipient
                sender
                variables
                type
                locale
                country
                subject
                attachments
                bodyFile {
                    available
                    url
                }
                bodyTextFile {
                    available
                    url
                }
            }
        }
    }
`;
export const FIND_ORGANIZATIONS = gql`
    query findOrganizations($offset: String, $limit: Int) {
        findOrganizations(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                tenant
                tenantCode
                name
                createdAt
                updatedAt
                status
                mail_notification_paye
            }
        }
    }
`;
export const FIND_TENANTS = gql`
    query findTenants($offset: String, $limit: Int) {
        findTenants(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                name
            }
        }
    }
`;
export const FIND_USERS = gql`
    query findUsers($offset: String, $limit: Int) {
        findUsers(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                lastName
                firstName
                email
                createdAt
                updatedAt
                status
                role
            }
        }
    }
`;
export const FIND_EMPLOYEES = gql`
    query findEmployees($offset: String, $limit: Int) {
        findEmployees(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                lastName
                firstName
                externalId
                email
                createdAt
                updatedAt
                status
                tenant
                statAccountAmount
            }
        }
    }
`;
export const FIND_PERIODS = gql`
    query findPeriods($offset: String, $limit: Int,$sortField: String, $sortOrder: String, $year: Int) {
        findPeriods(offset: $offset, limit: $limit, sortField: $sortField, sortOrder:$sortOrder, year:$year) {
            cursor
            count
            items {
                id
                contract
                contractName
                customerName
                dateStart
                dateEnd
                workedDay
                periodPercent
                periodTurnover
                internalFees
                periodExpense
                periodChargeProvided
                baseAccount
                taxedSalary
                employerContributions
                employeeContributions
                salary
                peeAmount
                perAmount
                incomeTaxes
                commercialFee
                craUrl
                payslipUrl
                
            }
        }
    }
`;
export const FIND_EINVOICES = gql`
    query findEinvoices($offset: String, $limit: Int) {
        findEinvoices(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                tenant
                tenantCode
                tenantName
                customer
                customerCode
                customerName
                project
                projectCode
                projectName
                price
                description
                externalId
            }
        }
    }
`;
export const FIND_REPORTS = gql`
    query findReports($offset: String, $limit: Int) {
        findReports(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                contract
                month
                workedDay
                mainFile {
                    url
                }
            }
        }
    }
`;

export const FIND_EXPENSES = gql`
    query findExpenses($offset: String, $limit: Int) {
        findExpenses(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                tenant
                name
                cost
                vatCost
                vatPercent
                mooncardId
                date
                justify
                display
            }
        }
    }
`;

export const FIND_FILES = gql`
    query findFiles($type: String,$offset: String, $limit: Int) {
        findFiles(type: $type, offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                tenant
                employee
                type
                name
                mainFile {
                    url
                    available
                    size
                }
            }
        }
    }
`;

export const FIND_CUSTOMERS = gql`
    query findCustomers($offset: String, $limit: Int) {
        findCustomers(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                name
                tenant
                externalId
            }
        }
    }
`;
export const FIND_CONTRACTS = gql`
    query findContracts($offset: String, $limit: Int) {
        findContracts(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                code
                customer
                customerName
                rate
                locked
                billingMode
                is_amendment
                dateEnd
                dateStart
            }
        }
    }
`;
export const FIND_SIMULATIONS = gql`
    query findSimulations($offset: String, $limit: Int) {
        findSimulations(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                type
                result
                values
                tenant
                tenantCode
                tenantName
                ownerEmail
                ownerName
                ownerFirstName
                createdAt
                status
            }
        }
    }
`;

export const FIND_STATEMENT_VALUES = gql`
    query findStatementValues($offset: String, $limit: Int,$sortField: String, $sortOrder: String, $year: Int) {
        findStatementValues(offset: $offset, limit: $limit,sortField: $sortField, sortOrder: $sortOrder, year: $year) {
            cursor
            count
            items {
                period
                contractName
                contractRate
                periodPercent
                workedDay
                periodTurnover
                gwFee
                internalFees
                commercialFee
                baseAccount
                employeeContributions
                employerContributions
                taxedSalary
                incomeTaxes
                salary
                peeAmount
                perAmount
                other
            }
        }
    }

`;

export const FIND_PAYSLIPS = gql`
    query findPayslips($offset: String, $limit: Int, $sortField: String, $sortOrder: String, $year: Int) {
        findPayslips(offset: $offset, limit: $limit, sortField:$sortField, sortOrder: $sortOrder, year: $year ) {
            cursor
            count
            items {
                id
                tenant
                tenantName
                code
                date
                employee
                employeeEmail
                employeeFirstName
                employeeLastName
                employeePhone
                externalId
                mainFile {
                    available
                    url
                }   
            }
        }
    }
`;
export const FIND_CINVOICES = gql`
    query findCinvoices($offset: String, $limit: Int) {
        findCinvoices(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                tenant
                tenantCode
                tenantName
                customer
                customerCode
                customerName
                project
                projectCode
                projectName
                price
                description
                externalId
            }
        }
    }
`;
export const FIND_CPERIODS = gql`
    query findCperiods($offset: String, $limit: Int) {
        findCperiods(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                createdAt
                updatedAt
                customer
                customerCode
                customerName 
                project 
                projectCode
                projectName
                tenant 
                tenantCode
                tenantName
               
            }
        }
    }
`;
export const FIND_CPAYMENTS = gql`
    query findCpayments($offset: String, $limit: Int) {
        findCpayments(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                createdAt
                updatedAt
                customer
                customerName
                customerCode
                project
                projectName
                projectCode
                tenant 
                tenantName
                tenantCode
               
            }
        }
    }
`;
export const FIND_PROJECTS = gql`
    query findProjects($offset: String, $limit: Int) {
        findProjects(offset: $offset, limit: $limit) {
            cursor
            count
            items {
                id
                tenant
                tenantName
                customer
                customerName
                name
                code
            }
        }
    }
`;

export const UPDATE_NOTIFICATION = gql`
    mutation updateNotification($id: ID!, $data: UpdateNotificationInput!) {
        updateNotification(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_USER = gql`
    mutation updateUser($id: ID!, $data: UpdateUserInput!) {
        updateUser(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_EMPLOYEE = gql`
    mutation updateEmployee($id: ID!, $data: UpdateEmployeeInput!) {
        updateEmployee(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_PERIOD = gql`
    mutation updatePeriod($id: ID!, $data: UpdatePeriodInput!) {
        updatePeriod(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_EINVOICE = gql`
    mutation updateEinvoice($id: ID!, $data: UpdateEinvoiceInput!) {
        updateEinvoice(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_REPORT = gql`
    mutation updateReport($id: ID!, $data: UpdateReportInput!) {
        updateReport(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_CUSTOMER = gql`
    mutation updateCustomer($id: ID!, $data: UpdateCustomerInput!) {
        updateCustomer(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_CONTRACT = gql`
    mutation updateContract($id: ID!, $data: UpdateContractInput!) {
        updateContract(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_SIMULATION = gql`
    mutation updateSimulation($id: ID!, $data: UpdateSimulationInput!) {
        updateSimulation(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_PROJECT = gql`
    mutation updateProject($id: ID!, $data: UpdateProjectInput!) {
        updateProject(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_CINVOICE = gql`
    mutation updateCinvoice($id: ID!, $data: UpdateCinvoiceInput!) {
        updateCinvoice(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_CPERIOD = gql`
    mutation updateCperiod($id: ID!, $data: UpdateCperiodInput!) {
        updateCperiod(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_CPAYMENT = gql`
    mutation updateCpayment($id: ID!, $data: UpdateCpaymentInput!) {
        updateCpayment(id: $id, data: $data) {
            id
        }
    }
`;
export const UPDATE_PAYSLIP = gql`
    mutation updatePayslip($id: ID!, $data: UpdatePayslipInput!) {
        updatePayslip(id: $id, data: $data) {
            id
        }
    }
`;

export const DELETE_NOTIFICATION = gql`
    mutation deleteNotification($id: ID!) {
        deleteNotification(id: $id) {
            id
        }
    }
`;

export const DELETE_EMPLOYEE = gql`
    mutation deleteEmployee($id: ID!) {
        deleteEmployee(id: $id) {
            id
        }
    }
`;
export const DELETE_PERIOD = gql`
    mutation deletePeriod($id: ID!) {
        deletePeriod(id: $id) {
            id
        }
    }
`;
export const DELETE_EINVOICE = gql`
    mutation deleteEinvoice($id: ID!) {
        deleteEinvoice(id: $id) {
            id
        }
    }
`;
export const DELETE_REPORT = gql`
    mutation deleteReport($id: ID!) {
        deleteReport(id: $id) {
            id
        }
    }
`;

export const DELETE_EXPENSE = gql`
    mutation deleteExpense($id: ID!) {
        deleteExpense(id: $id) {
            id
        }
    }
`;

export const DELETE_CUSTOMER = gql`
    mutation deleteCustomer($id: ID!) {
        deleteCustomer(id: $id) {
            id
        }
    }
`;
export const DELETE_CONTRACT = gql`
    mutation deleteContract($id: ID!) {
        deleteContract(id: $id) {
            id
        }
    }
`;
export const DELETE_SIMULATION = gql`
    mutation deleteSimulation($id: ID!) {
        deleteSimulation(id: $id) {
            id
        }
    }
`;
export const DELETE_PROJECT = gql`
    mutation deleteProject($id: ID!) {
        deleteProject(id: $id) {
            id
        }
    }
`;
export const DELETE_CINVOICE = gql`
    mutation deleteCinvoice($id: ID!) {
        deleteCinvoice(id: $id) {
            id
        }
    }
`;
export const DELETE_CPERIOD = gql`
    mutation deleteCperiod($id: ID!) {
        deleteCperiod(id: $id) {
            id
        }
    }
`;
export const DELETE_CPAYMENT = gql`
    mutation deleteCpayment($id: ID!) {
        deleteCpayment(id: $id) {
            id
        }
    }
`;
export const DELETE_PAYSLIP = gql`
    mutation deletePayslip($id: ID!) {
        deletePayslip(id: $id) {
            id
        }
    }
`;

export const DELETE_USER = gql`
    mutation deleteUser($id: ID!) {
        deleteUser(id: $id) {
            id
        }
    }
`;

