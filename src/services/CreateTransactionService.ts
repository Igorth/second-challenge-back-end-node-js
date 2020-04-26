import { getCustomRepository } from 'typeorm';
// import AppError from '../errors/AppError';

import Transaction from '../models/Transaction';
import TransactionRepository from '../repositories/TransactionsRepository';

interface Request {
  title: string;
  value: number;
  type: 'income' | 'outcome';
  category: string;
}

class CreateTransactionService {
  public async execute({ title, value, type }: Request): Promise<Transaction> {
    const transactionsRepository = getCustomRepository(TransactionRepository);

    // const { total } = transactionsRepository.getBalance();

    // if (type === 'outcome' && total < value) {
    //   throw new AppError('You do not have enough balance');
    // }

    // const checkCategoryExists = await transactionsRepository.findOne({
    //   where: { category },
    // });

    // if (checkCategoryExists) {
    //   throw new AppError('Category already exist.');
    // }

    const transaction = transactionsRepository.create({
      title,
      value,
      type,
    });

    await transactionsRepository.save(transaction);

    return transaction;
  }
}

export default CreateTransactionService;
