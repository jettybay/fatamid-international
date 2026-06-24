import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface MetricCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: string;
  color?: 'purple' | 'emerald' | 'orange' | 'blue';
  action?: string;
}

export default function MetricCard({
  title,
  value,
  subtitle,
  trend,
  color = 'purple',
  action,
}: MetricCardProps) {
  const colorClasses = {
    purple: 'bg-purple-50 border-purple-100 text-purple-700',
    emerald: 'bg-emerald-50 border-emerald-100 text-emerald-700',
    orange: 'bg-orange-50 border-orange-100 text-orange-700',
    blue: 'bg-blue-50 border-blue-100 text-blue-700',
  };

  const isTrendPositive = trend && parseFloat(trend) >= 0;

  return (
    <div className="card p-6 hover:shadow-lg transition-all">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

        {/* Trend Badge */}
        {trend && (
          <div
            className={`flex items-center gap-1 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-semibold ${colorClasses[color]}`}
          >
            {isTrendPositive ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{trend}%</span>
          </div>
        )}
      </div>

      {/* Action Button */}
      {action && (
        <button className={`mt-4 w-full py-2 rounded-lg font-medium text-sm transition ${colorClasses[color]} hover:opacity-80`}>
          {action}
        </button>
      )}
    </div>
  );
}
