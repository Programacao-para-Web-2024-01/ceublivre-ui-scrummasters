document.addEventListener('DOMContentLoaded', () => {
    const userForm = document.getElementById('userForm');
    const vendedorForm = document.getElementById('vendedorForm');

    if (userForm) {
        userForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(userForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('http://localhost:8081/registerUser', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    alert('Usuário cadastrado com sucesso');
                } else {
                    alert('Erro ao cadastrar usuário');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao cadastrar usuário');
            }
        });
    }

    if (vendedorForm) {
        vendedorForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(vendedorForm);
            const data = Object.fromEntries(formData.entries());
            try {
                const response = await fetch('http://localhost:8081/registerVendedor', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                });
                if (response.ok) {
                    alert('Vendedor cadastrado com sucesso');
                } else {
                    alert('Erro ao cadastrar vendedor');
                }
            } catch (error) {
                console.error('Erro:', error);
                alert('Erro ao cadastrar vendedor');
            }
        });
    }

    document.querySelector('.google').addEventListener('click', () => {
        alert('Login com Google não implementado');

    });

    document.querySelector('.facebook').addEventListener('click', () => {
        alert('Login com Facebook não implementado');

    });
});
