function Button(props) {
  return (
    <button
      style={{
        backgroundColor: 'white',
        color: '#3ecf8e',
        padding: '1rem',
        fontWeight: 'bold',
        fontSize: '2.5rem',
        border: 'none',
        borderRadius: '8px',
        boxShadow: '0 8px 14px rgba(0,0,0,.35), 0 1px 3px rgba(0,0,0,.08)',
        textTransform: 'uppercase',
        webkitTransition: '175ms ease-in-out',
        transition: '175ms ease-in-out'
      }}
    >
      Click me
    </button>
  );
}
