import CustomerItem from "../CustomerItem/CustomerItem"; // CustomerItem bileşenini import ediyoruz.
import "./CustomerList.css"; // CSS dosyasını import ediyoruz.

const CustomerList = ({ customers, setCustomers }) => {
  // customers ve setCustomers props olarak alınıyor.

  //!Delete customer
  const handleDelete = (item) => {
    // Müşteri silme işlemi.
    setCustomers(customers.filter((customer) => customer.id !== item.id)); // Silinecek müşteri hariç yeni bir müşteri listesi oluşturuyoruz.
  };

  return (
    <ul className="customer-list">
      {customers.map(
        (
          customer // Müşteri listesi üzerinde döngü yapıyoruz.
        ) => (
          <CustomerItem
            customer={customer}
            key={customer.id} // Her müşteri için CustomerItem bileşeni oluşturuyoruz.
            handleDelete={handleDelete}
          /> // Silme fonksiyonunu geçiriyoruz.
        )
      )}
    </ul>
  );
};

export default CustomerList;
