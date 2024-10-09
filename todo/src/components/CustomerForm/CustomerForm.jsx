import "./CustomerForm.css"; // CSS dosyasını import ediyoruz.
import React, { useState } from "react"; // React ve useState'i import ediyoruz.

const CustomerForm = ({ addNewCustomer }) => {
  // addNewCustomer fonksiyonu props olarak alınıyor.
  const [customerName, setCustomerName] = useState(""); // Müşteri adı için state tanımladık.

  const handleSubmit = (event) => {
    event.preventDefault(); // Formun varsayılan gönderim davranışını engelliyoruz.
    const newCustomer = {
      id: Math.random(), // Rastgele bir ID oluşturuyoruz.
      customerName, // Müşteri adını alıyoruz.
    };
    addNewCustomer(newCustomer); // Yeni müşteri ekleme fonksiyonunu çağırıyoruz.
    setCustomerName(""); // Formdan sonra müşteri adını temizliyoruz.
  };

  return (
    <form className="customer-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="customer-input"
        placeholder="Add a new customer"
        onChange={(e) => setCustomerName(e.target.value)}
        value={customerName}
      />
      {customerName}
      <button>
        <i className="bi bi-plus-lg"></i>
      </button>
    </form>
  );
};

export default CustomerForm;
