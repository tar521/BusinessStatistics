
const URI = "http://localhost:8080/api/sales";

const SalesApi = {


    createSale : (sale) => {
        // NO URI CHANGE

        fetch(URI, {
            method: 'POST',
            body: JSON.stringify(sale),
            headers: { "Content-Type": "application/json" }
            // "Authorization": "Bearer jwt"
        })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
    },

    // Get all sales
    getSales : (setData) => {
        
        fetch(URI) // JWT
        .then(result => {
             return result.json()
        })
        .then(result => {
            setData(result);
        })
        .catch(error => console.log(error));
    },

    getSaleById : (saleId) => {
        
        fetch(`${URI}/${saleId}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));

    },


    getSalesByDeptId : (deptId) => {
        
        fetch(`${URI}/dept/${deptId}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },

    getSalesByYear : (year) => {
        
        fetch(`${URI}/year/${year}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },
    getSalesByMonthYear : (date) => { 
        
        fetch(`${URI}/month?month=${date[0]}&year=${date[1]}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },

    getSalesByDeptYear : (deptAndYear) => {
        
        fetch(`${URI}/dept/year?id=${deptAndYear[0]}&year=${deptAndYear[1]}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },
    getSalesByDeptMonthYear : (deptAndDate) => {
        
        fetch(`${URI}/dept/month?id=${deptAndDate[0]}&year=${deptAndDate[1]}&month=${deptAndDate[2]}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },
    userSales : (userId) => {
        
        fetch(`${URI}/user/${userId}`) // JWT
        .then(result => {
             return result.json()
        })
        .catch(error => console.log(error));
    },
    updateSale : (saleToUpdate) => {
        
        fetch(URI, {
            method: 'PUT',
            body: JSON.stringify(saleToUpdate),
            headers: { "Content-Type": "application/json" }
            // "Authorization": "Bearer jwt"
        })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
    },
    deleteSale : (saleToDeleteId) => {
        
        fetch(URI, {
            method: 'DELETE'
            // "Authorization": "Bearer jwt"
        })
        .then(response => {
            return response.json();
        })
        .catch(error => console.log(error));
    }
}

export default SalesApi;
