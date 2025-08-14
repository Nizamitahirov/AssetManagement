document.addEventListener('DOMContentLoaded', function () {
    // --- DATA STORE (DATABASE SIMULATION) ---
    const employees = [
        { id: 'E001', name: 'Afrasiyab Huseynli', department: 'Finance' },
        { id: 'E002', name: 'Malik Aliyev', department: 'Administration' },
        { id: 'E003', name: 'John Doe', department: 'HR' },
        { id: 'E004', name: 'Ali Nino', department: 'Operations' },
        { id: 'E005', name: 'Flora Hasanova', department: 'IT' },
        { id: 'E006', name: 'Daniz Mammadli', department: 'Finance' },
    ];

    let assets = [
        { id: 1, name: 'MacBook Pro 16"', tag: 'NTB-001', category: 'Notebook', serial: 'C02F1234J1G5', price: 5500, purchaseDate: '2023-03-15', usefulLifeYears: 4, status: 'In Use', assignedTo: 'E001', history: [{ event: 'Assigned to Mail Isayev', date: '2023-03-20', notes: 'New hire setup' }] },
        { id: 2, name: 'Dell UltraSharp U2721DE', tag: 'MON-001', category: 'Monitor', serial: 'SN-12345ABC', price: 950, purchaseDate: '2023-07-20', usefulLifeYears: 5, status: 'In Stock', assignedTo: null, history: [{ event: 'Registered in system', date: '2023-07-20', notes: '' }] },
        { id: 3, name: 'Logitech MX Master 3', tag: 'MSE-001', category: 'Mouse', serial: 'SN-98765DEF', price: 220, purchaseDate: '2022-11-01', usefulLifeYears: 3, status: 'In Use', assignedTo: 'E002', history: [{ event: 'Assigned to Seymur Jalalov', date: '2022-11-05', notes: '' }] },
        { id: 4, name: 'iPhone 14 Pro', tag: 'PHN-001', category: 'Mobile Phone', serial: 'SN-IP14P-001', price: 3200, purchaseDate: '2023-01-10', usefulLifeYears: 3, status: 'In Repair', assignedTo: null, history: [{ event: 'Assigned to Khatia Tkeshelashvili', date: '2023-01-12' }, { event: 'Returned, screen issue', date: '2023-08-01' }, { event: 'Sent to repair', date: '2023-08-02', notes: 'Screen flickering.' }] },
        { id: 5, name: 'Herman Miller Aeron', tag: 'CHR-001', category: 'Furniture', serial: 'N/A', price: 1800, purchaseDate: '2021-05-15', usefulLifeYears: 10, status: 'In Use', assignedTo: 'E004', history: [{ event: 'Assigned to Nino Tinikashvili', date: '2021-05-15', notes: '' }] },
        { id: 6, name: 'ASAN İmza', tag: 'SCR-001', category: 'Security', serial: 'AZ1234567', price: 108, purchaseDate: '2023-02-01', usefulLifeYears: 3, status: 'In Use', assignedTo: 'E001', history: [{ event: 'Assigned to Mail Isayev', date: '2023-02-01', notes: 'For banking operations' }] },
        { id: 7, name: 'Toyota Camry', tag: 'VEH-001', category: 'Vehicle', serial: 'JN123XYZ', price: 65000, purchaseDate: '2022-01-01', usefulLifeYears: 7, status: 'Archived', assignedTo: null, history: [{ event: 'Company pool car', date: '2022-01-01' }, { event: 'Sold', date: '2023-06-30', notes: 'End of life cycle' }] },
        { id: 8, name: 'Logitech K860', tag: 'KBD-001', category: 'Keyboard', serial: 'SN-K860-001', price: 280, purchaseDate: '2023-04-12', usefulLifeYears: 3, status: 'In Stock', assignedTo: null, history: [{ event: 'Registered in system', date: '2023-04-12', notes: '' }] },
        { id: 9, name: 'Bakcell SIM Card', tag: 'SIM-001', category: 'SIM Card', serial: '88005553535', price: 25, purchaseDate: '2023-01-01', usefulLifeYears: 99, status: 'In Use', assignedTo: 'E005', history: [{ event: 'Assigned to Akaki Koberidze', date: '2023-01-01', notes: '' }] },
        { id: 10, name: 'Business Cards (x200)', tag: 'PRN-001', category: 'Consumable', serial: 'N/A', price: 50, purchaseDate: '2023-08-10', usefulLifeYears: 1, status: 'In Use', assignedTo: 'E003', history: [{ event: 'Given to Khatia Tkeshelashvili', date: '2023-08-10', notes: '' }] },
        { id: 11, name: 'Cash Float', tag: 'FIN-001', category: 'Finance', serial: 'N/A', price: 500, purchaseDate: '2023-01-01', usefulLifeYears: 99, status: 'In Use', assignedTo: 'E006', history: [{ event: 'Assigned to Marine Jandagashvili', date: '2023-01-01', notes: 'For petty cash' }] },
        { id: 12, name: 'HP LaserJet Pro M404dn', tag: 'PRT-001', category: 'Printer', serial: 'VN3F6G7', price: 750, purchaseDate: '2022-09-01', usefulLifeYears: 5, status: 'In Stock', assignedTo: null, history: [{ event: 'Registered in system', date: '2022-09-01' }] },
        { id: 13, name: 'Lenovo ThinkPad T14', tag: 'NTB-002', category: 'Notebook', serial: 'PF2S4G7H', price: 3400, purchaseDate: '2023-05-20', usefulLifeYears: 4, status: 'In Use', assignedTo: 'E003', history: [{ event: 'Assigned to Khatia Tkeshelashvili', date: '2023-05-22' }] },
        { id: 14, name: 'Cisco IP Phone 8841', tag: 'PHN-002', category: 'IP Phone', serial: 'FCH2228J2YF', price: 450, purchaseDate: '2022-08-15', usefulLifeYears: 6, status: 'In Use', assignedTo: 'E004', history: [{ event: 'Assigned to Nino Tinikashvili', date: '2022-08-16' }] },
        { id: 15, name: 'Bose QC 45 Headphones', tag: 'AUD-001', category: 'Audio', serial: '082169Z12345678AE', price: 650, purchaseDate: '2023-06-01', usefulLifeYears: 3, status: 'In Stock', assignedTo: null, history: [{ event: 'Registered in system', date: '2023-06-01' }] },
        { id: 16, name: 'Samsung 55" QLED TV', tag: 'DSY-001', category: 'Display', serial: '0B5H3LSR500123', price: 2100, purchaseDate: '2022-12-10', usefulLifeYears: 7, status: 'In Use', assignedTo: null, history: [{ event: 'Installed in Meeting Room 1', date: '2022-12-11' }] },
        { id: 17, name: 'APC Back-UPS 1500VA', tag: 'PWR-001', category: 'Power Supply', serial: '3B2123X51987', price: 400, purchaseDate: '2023-02-20', usefulLifeYears: 5, status: 'In Use', assignedTo: 'E005', history: [{ event: 'Assigned to Akaki Koberidze for server rack', date: '2023-02-21' }] },
        { id: 18, name: 'Adobe Creative Cloud License', tag: 'LIC-001', category: 'Software', serial: 'ADBE-123-XYZ', price: 1200, purchaseDate: '2023-01-01', usefulLifeYears: 1, status: 'In Use', assignedTo: null, history: [{ event: 'Assigned to Marketing Department', date: '2023-01-01', notes: 'Annual subscription' }] },
        { id: 19, name: 'Office Key', tag: 'KEY-001', category: 'Key', serial: 'M-01', price: 5, purchaseDate: '2020-01-01', usefulLifeYears: 20, status: 'In Use', assignedTo: 'E002', history: [{ event: 'Assigned to Seymur Jalalov', date: '2020-01-01' }] },
        { id: 20, name: 'Fire Extinguisher', tag: 'SFT-001', category: 'Safety', serial: 'FE-2023-05', price: 80, purchaseDate: '2023-05-15', usefulLifeYears: 5, status: 'In Stock', assignedTo: null, history: [{ event: 'Placed in hallway', date: '2023-05-16', notes: 'Next inspection: 2024-05-15' }] },
    ];
    
    // --- STATE MANAGEMENT ---
    let currentSort = { column: 'name', direction: 'asc' };
    let currentFilters = { search: '', status: 'all', category: 'all' };

    // --- DOM ELEMENTS ---
    const tableBody = document.getElementById('asset-table-body');
    const assetCountEl = document.getElementById('asset-count');
    const searchInput = document.getElementById('search-input');
    const statusFilter = document.getElementById('filter-status');
    const categoryFilter = document.getElementById('filter-category');
    const addAssetModal = document.getElementById('addAssetModal');
    const checkoutModal = document.getElementById('checkoutModal');
    const checkinModal = document.getElementById('checkinModal');
    const detailsModal = document.getElementById('detailsModal');
    const modals = [addAssetModal, checkoutModal, checkinModal, detailsModal];

    // --- UTILITY FUNCTIONS ---
    const findEmployee = (id) => employees.find(e => e.id === id);
    const formatDate = (dateString) => new Date(dateString).toLocaleDateString('az-AZ');
    
    function calculateResidualValue(asset) {
        if (!asset || typeof asset.price !== 'number' || typeof asset.usefulLifeYears !== 'number' || !asset.purchaseDate) {
            return { value: 'N/A', percentage: 0 };
        }
        const purchaseDate = new Date(asset.purchaseDate);
        const now = new Date();
        const monthsElapsed = (now.getFullYear() - purchaseDate.getFullYear()) * 12 + (now.getMonth() - purchaseDate.getMonth());
        const totalMonths = asset.usefulLifeYears * 12;
        if (monthsElapsed >= totalMonths || totalMonths === 0) return { value: (0).toFixed(2), percentage: 0 };
        
        const depreciationPerMonth = asset.price / totalMonths;
        const totalDepreciation = depreciationPerMonth * monthsElapsed;
        const residualValue = Math.max(0, asset.price - totalDepreciation);
        const percentage = (residualValue / asset.price) * 100;
        
        return { value: residualValue.toFixed(2), percentage: percentage.toFixed(0) };
    }

    // --- RENDER FUNCTIONS ---
    function renderTable() {
        // 1. Filter
        let filteredAssets = assets.filter(asset => {
            const searchLower = currentFilters.search.toLowerCase();
            const employee = findEmployee(asset.assignedTo);
            const employeeName = employee ? employee.name.toLowerCase() : '';
            const matchesSearch = asset.name.toLowerCase().includes(searchLower) ||
                                  asset.tag.toLowerCase().includes(searchLower) ||
                                  employeeName.includes(searchLower);
            const matchesStatus = currentFilters.status === 'all' || asset.status === currentFilters.status;
            const matchesCategory = currentFilters.category === 'all' || asset.category === currentFilters.category;
            return matchesSearch && matchesStatus && matchesCategory;
        });

        // 2. Sort
        filteredAssets.sort((a, b) => {
            let valA = a[currentSort.column];
            let valB = b[currentSort.column];
            if (currentSort.column === 'assignedTo') {
                valA = findEmployee(a.assignedTo)?.name || 'zzz';
                valB = findEmployee(b.assignedTo)?.name || 'zzz';
            } else if (currentSort.column === 'price') {
                 valA = a.price;
                 valB = b.price;
            } else if (typeof valA === 'string') {
                valA = valA.toLowerCase();
                valB = valB.toLowerCase();
            }
            if (valA < valB) return currentSort.direction === 'asc' ? -1 : 1;
            if (valA > valB) return currentSort.direction === 'asc' ? 1 : -1;
            return 0;
        });

        // 3. Render HTML
        tableBody.innerHTML = '';
        if (filteredAssets.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding: 30px;">No assets found matching your criteria.</td></tr>`;
        } else {
            filteredAssets.forEach(asset => {
                const employee = findEmployee(asset.assignedTo);
                const row = document.createElement('tr');
                
                let actionButtonsHTML = `<button title="View Details" data-action="details" data-id="${asset.id}"><i class="fa-solid fa-eye"></i></button>`;
                if (asset.status === 'In Stock') {
                    actionButtonsHTML += `<button title="Check-out" data-action="checkout" data-id="${asset.id}"><i class="fa-solid fa-arrow-up-right-from-square"></i></button>`;
                } else if (asset.status === 'In Use') {
                    actionButtonsHTML += `<button title="Check-in" data-action="checkin" data-id="${asset.id}"><i class="fa-solid fa-arrow-down-left-to-square"></i></button>`;
                }
                
                row.innerHTML = `
                    <td><div class="asset-info"><span class="asset-name">${asset.name}</span><span class="asset-tag">${asset.tag}</span></div></td>
                    <td>${asset.category}</td>
                    <td><span class="status-pill status-${asset.status.toLowerCase().replace(' ', '-')}">${asset.status}</span></td>
                    <td>${employee ? `<div class="user-info"><span class="user-name">${employee.name}</span><span class="user-dept">${employee.department}</span></div>` : '—'}</td>
                    <td>${formatDate(asset.purchaseDate)}</td>
                    <td>${asset.price.toFixed(2)} AZN</td>
                    <td class="action-buttons">${actionButtonsHTML}</td>
                `;
                tableBody.appendChild(row);
            });
        }
        
        assetCountEl.textContent = `${assets.length} Total Assets`;
        updateSortIcons();
    }
    
    function populateFilters() {
        const categories = [...new Set(assets.map(a => a.category))].sort();
        categoryFilter.innerHTML = '<option value="all">All Categories</option>';
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categoryFilter.appendChild(option);
        });
        
        const employeeSelect = document.getElementById('assignToEmployee');
        if(!employeeSelect) return;
        employeeSelect.innerHTML = '<option value="">Select an employee...</option>';
        employees.forEach(emp => {
            const option = document.createElement('option');
            option.value = emp.id;
            option.textContent = `${emp.name} (${emp.department})`;
            employeeSelect.appendChild(option);
        });
    }

    function updateSortIcons() {
        document.querySelectorAll('thead th[data-sort]').forEach(th => {
            th.classList.remove('sorted-asc', 'sorted-desc');
            const icon = th.querySelector('i');
            icon.className = 'fa-solid fa-sort';
            if (th.dataset.sort === currentSort.column) {
                th.classList.add(currentSort.direction === 'asc' ? 'sorted-asc' : 'sorted-desc');
                icon.className = `fa-solid fa-sort-${currentSort.direction === 'asc' ? 'up' : 'down'}`;
            }
        });
    }
    
    // --- MODAL & ACTION HANDLERS ---
    function openModal(modal) { modal.style.display = 'block'; }
    function closeModal(modal) { modal.style.display = 'none'; }

    document.getElementById('add-asset-btn').addEventListener('click', () => {
        document.getElementById('addAssetForm').reset();
        openModal(addAssetModal);
    });

    document.getElementById('addAssetForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const newAsset = {
            id: Date.now(),
            name: document.getElementById('assetName').value.trim(),
            tag: `ASSET-${String(Date.now()).slice(-4)}`,
            category: document.getElementById('assetCategory').value.trim(),
            serial: document.getElementById('serialNumber').value.trim(),
            price: parseFloat(document.getElementById('purchasePrice').value),
            purchaseDate: document.getElementById('purchaseDate').value,
            usefulLifeYears: parseInt(document.getElementById('usefulLife').value),
            status: 'In Stock',
            assignedTo: null,
            history: [{ event: 'Registered in system', date: new Date().toISOString().slice(0, 10), notes: 'Added by Admin' }]
        };
        assets.unshift(newAsset);
        closeModal(addAssetModal);
        populateFilters();
        renderTable();
    });

    tableBody.addEventListener('click', (e) => {
        const button = e.target.closest('button[data-action]');
        if (!button) return;
        const action = button.dataset.action;
        const assetId = parseInt(button.dataset.id);
        const asset = assets.find(a => a.id === assetId);
        if(!asset) return;

        if (action === 'details') {
            const { value, percentage } = calculateResidualValue(asset);
            const employee = findEmployee(asset.assignedTo);
            document.getElementById('details-modal-title').textContent = `${asset.name} (${asset.tag})`;
            document.getElementById('details-modal-body').innerHTML = `
                <div class="details-grid">
                    <div class="details-section">
                        <h3>Asset Information</h3>
                        <div class="detail-item"><span class="label">Category:</span><span class="value">${asset.category}</span></div>
                        <div class="detail-item"><span class="label">Serial Number:</span><span class="value">${asset.serial || 'N/A'}</span></div>
                        <div class="detail-item"><span class="label">Status:</span><span class="value"><span class="status-pill status-${asset.status.toLowerCase().replace(' ', '-')}">${asset.status}</span></span></div>
                        <div class="detail-item"><span class="label">Assigned To:</span><span class="value">${employee ? `${employee.name} (${employee.department})` : 'Not Assigned'}</span></div>
                    </div>
                    <div class="details-section">
                        <h3>Financials</h3>
                        <div class="detail-item"><span class="label">Purchase Price:</span><span class="value">${asset.price.toFixed(2)} AZN</span></div>
                        <div class="detail-item"><span class="label">Purchase Date:</span><span class="value">${formatDate(asset.purchaseDate)}</span></div>
                        <div class="detail-item"><span class="label">Useful Life:</span><span class="value">${asset.usefulLifeYears} years</span></div>
                        <div class="detail-item"><span class="label">Residual Value:</span><span class="value">${value} AZN</span></div>
                        <div class="value-bar-container" title="${percentage}% of original value remaining"><div class="value-bar" style="width: ${percentage}%;"></div></div>
                    </div>
                </div>
                <div class="details-section" style="margin-top: 20px;">
                    <h3>Assignment History</h3>
                    <ul class="history-list">
                        ${asset.history.slice().reverse().map(h => `<li class="history-item"><p><span class="event">${h.event}</span></p><p class="date">Date: ${formatDate(h.date)}</p>${h.notes ? `<p class="notes">Notes: ${h.notes}</p>` : ''}</li>`).join('')}
                    </ul>
                </div>`;
            openModal(detailsModal);
        } else if (action === 'checkout') {
            document.getElementById('checkout-asset-name').textContent = asset.name;
            document.getElementById('checkoutForm').dataset.assetId = assetId;
            document.getElementById('checkoutForm').reset();
            document.getElementById('checkoutDate').value = new Date().toISOString().slice(0, 10);
            openModal(checkoutModal);
        } else if (action === 'checkin') {
            document.getElementById('checkin-asset-name').textContent = asset.name;
            const checkinForm = document.getElementById('checkinForm');
            checkinForm.reset();
            checkinForm.dataset.assetId = assetId;
            document.getElementById('checkinDate').value = new Date().toISOString().slice(0, 10);
            openModal(checkinModal);
        }
    });
    
    document.getElementById('checkoutForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const assetId = parseInt(e.target.dataset.assetId);
        const employeeId = document.getElementById('assignToEmployee').value;
        const checkoutDate = document.getElementById('checkoutDate').value;
        const notes = document.getElementById('checkoutNotes').value.trim();
        const asset = assets.find(a => a.id === assetId);
        const employee = findEmployee(employeeId);
        if (asset && employee) {
            asset.status = 'In Use';
            asset.assignedTo = employeeId;
            asset.history.push({ event: `Assigned to ${employee.name}`, date: checkoutDate, notes });
            closeModal(checkoutModal);
            renderTable();
        } else {
            alert('Please select a valid employee.');
        }
    });

    document.getElementById('checkinForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const assetId = parseInt(e.target.dataset.assetId);
        const asset = assets.find(a => a.id === assetId);
        if (!asset) return;
        
        const checkinDate = document.getElementById('checkinDate').value;
        const condition = document.getElementById('checkinCondition').value;
        const notes = document.getElementById('checkinNotes').value.trim();
        const previousEmployeeName = findEmployee(asset.assignedTo)?.name || 'N/A';
        
        asset.status = 'In Stock';
        asset.assignedTo = null;
        let historyNote = `Returned from ${previousEmployeeName}. Condition: ${condition}.`;
        if (notes) { historyNote += ` Notes: ${notes}`; }
        asset.history.push({ event: `Checked-in`, date: checkinDate, notes: historyNote });
        
        closeModal(checkinModal);
        renderTable();
    });

    modals.forEach(modal => {
        modal.querySelector('.close-btn').addEventListener('click', () => closeModal(modal));
        modal.querySelectorAll('.cancel-btn').forEach(btn => btn.addEventListener('click', () => closeModal(modal)));
        modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(modal); });
    });

    // --- EVENT LISTENERS FOR CONTROLS ---
    searchInput.addEventListener('input', () => { currentFilters.search = searchInput.value; renderTable(); });
    statusFilter.addEventListener('change', () => { currentFilters.status = statusFilter.value; renderTable(); });
    categoryFilter.addEventListener('change', () => { currentFilters.category = categoryFilter.value; renderTable(); });
    document.querySelector('thead').addEventListener('click', (e) => {
        const th = e.target.closest('th[data-sort]');
        if(!th) return;
        const column = th.dataset.sort;
        if (currentSort.column === column) {
            currentSort.direction = currentSort.direction === 'asc' ? 'desc' : 'asc';
        } else {
            currentSort.column = column;
            currentSort.direction = 'asc';
        }
        renderTable();
    });
    document.getElementById('export-csv').addEventListener('click', () => {
        const headers = ["ID","Tag","Name","Category","Status","Assigned To","Purchase Date","Price"];
        let csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + "\n";
        const dataToExport = assets; // Or filteredAssets based on preference
        dataToExport.forEach(asset => {
            const employeeName = findEmployee(asset.assignedTo)?.name || "N/A";
            const row = [asset.id, asset.tag, `"${asset.name.replace(/"/g, '""')}"`, asset.category, asset.status, `"${employeeName}"`, asset.purchaseDate, asset.price].join(",");
            csvContent += row + "\n";
        });
        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "asset_export.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });

    // --- INITIALIZATION ---
    populateFilters();
    renderTable();
});
