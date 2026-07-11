const fs = require('fs');
const file = 'orbX-site/src/components/Products.jsx';
let content = fs.readFileSync(file, 'utf8');
content = content.replace(
    {
    name:'OrbX My Ledger', icon:CreditCard, badge:'Finance Suite', color:'#00a86b',
    desc:'Comprehensive financial management with cash flow control, bank reconciliation, and complete audit trails.',
    features:['Cash Management','Bank Management','Expense Tracking','Cheque Management','Internal Transfers','Day Book','Ledger Reports'],
  },
];,
    {
    name:'OrbX My Ledger', icon:CreditCard, badge:'Finance Suite', color:'#00a86b',
    desc:'Comprehensive financial management with cash flow control, bank reconciliation, and complete audit trails.',
    features:['Cash Management','Bank Management','Expense Tracking','Cheque Management','Internal Transfers','Day Book','Ledger Reports'],
  },
  {
    name:'OrbX HRMS', icon:Users, badge:'HR Management', color:'#0284c7',
    desc:'Complete Human Resource Management system with remote attendance, payroll processing, and multi-level approvals.',
    features:['Remote Attendance with GPS', 'Biometric Integration', 'Auto Payroll Processing', 'Auto Comp-Off Calculation', 'Salary Templates', 'Custom Salary Rules', 'Multiple Shift Management', 'Leave Approval Workflow', 'Daily HR Dashboard', 'Holiday Management', 'Company Holiday Rules', 'Custom LOP Rules', 'Employee Self-Service Portal', 'Multi-Level Approvals', 'Real-Time Reports & Analytics', 'Secure Role-Based Access'],
  },
];
);
content = content.replace(
  const soon = [
  {name:'OrbX HRMS', icon:Users, desc:'Human Resource Management'},
  {name:'OrbX CRM', icon:Globe, desc:'Customer Relationship'},
  {name:'OrbX Service', icon:Headphones, desc:'Service & Maintenance'},
  {name:'OrbX Mobile', icon:Smartphone, desc:'Mobile-first Operations'},
];,
  const soon = [
  {name:'OrbX CRM', icon:Globe, desc:'Customer Relationship'},
  {name:'OrbX Service', icon:Headphones, desc:'Service & Maintenance'},
  {name:'OrbX Mobile', icon:Smartphone, desc:'Mobile-first Operations'},
];
);
fs.writeFileSync(file, content);
console.log('done');

