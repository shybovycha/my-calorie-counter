import React, { useMemo } from 'react';

import { compareDesc } from 'date-fns';

import { useExerciseContext } from '../../contexts/exerciseContext';
import { useNutritionContext } from '../../contexts/nutritionContext';

const NutritionRecord = ({ ingridients, name, amount, energy, date }) => (
    <div className="history_record__nutrition">
        <div className="history_record__nutrition__name">{name}</div>
        <div className="history_record__nutrition__amount">{amount}</div>
        <div className="history_record__nutrition__energy">{energy}</div>
        <div className="history_record__nutrition__date">{date}</div>
    </div>
);

const ExerciseRecord = ({ name, duration, repetitions, energy, date }) => (
    <div className="history_record__nutrition">
        <div className="history_record__exercise__name">{name}</div>
        <div className="history_record__exercise__duration">{duration}</div>
        <div className="history_record__exercise__energy">{energy}</div>
        <div className="history_record__exercise__date">{date}</div>
    </div>
);

const HistoryRecord = ({ type, ...rest }) => {
    if (type === 'NUTRITION') return (<NutritionRecord {...rest} />);
    if (type === 'EXERCISE') return (<ExerciseRecord {...rest} />);
    return null;
};

export default () => {
    const { exerciseRecords } = useExerciseContext();
    const { nutritionRecords } = useNutritionContext();

    const records = useMemo(() => {
        const nutrition = nutritionRecords.map((record) => ({ type: 'NUTRITION', ...record }));
        const exercise = exerciseRecords.map((record) => ({ type: 'EXERCISE', ...record }));

        return [...nutrition, ...exercise].sort(({ date: date1 }, { date: date2 }) => compareDesc(date1, date2));
    }, [exerciseRecords, nutritionRecords]);

    return (
        <>
            {records.map(record => (
                <HistoryRecord {...record} key={`${record.type.toLowerCase()}-${record.date}`} />
            ))}
        </>
    );
};
