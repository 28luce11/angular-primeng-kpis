export interface KPI {
  id: string;
  name: string;
  value: number | string;
  unit: string;
  target: number | string;
  trend: 'up' | 'down';
  percentageChange: number;
  category: string;
  icon?: string;
  iconBg?: 'blue' | 'yellow' | 'green';
  valueColor?: 'green' | 'orange' | 'red';
}
