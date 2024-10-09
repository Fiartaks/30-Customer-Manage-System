import { useState } from "react"; // React kütüphanesinden useState hook'unu import ediyoruz.
import "./App.css"; // CSS dosyasını import ediyoruz.
import CustomerForm from "./components/CustomerForm/CustomerForm"; // CustomerForm bileşenini import ediyoruz.
import CustomerList from "./components/CustomerList/CustomerList"; // CustomerList bileşenini import ediyoruz.

function App() {
  const [customers, setCustomers] = useState([]); // Müşteri listesini tutmak için state tanımlıyoruz.

  const addNewCustomer = (newCustomer) => {
    // Yeni müşteri ekleyen fonksiyon.
    setCustomers((prevState) => [newCustomer, ...prevState]); // Gelen yeni müşteriyi mevcut müşteri listesinin başına ekliyoruz.
  };

  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer} />
      {customers.length === 0 && "There are no customers..."}
      <CustomerList customers={customers} setCustomers={setCustomers} />
    </div>
  );
}

export default App; // App bileşenini dışa aktarıyoruz.
