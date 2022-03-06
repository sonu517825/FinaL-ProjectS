#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
int F1, F2, x = 11, y = 11, Gameover = 0, scr = 0, k = 0, dir;
int pathx[100], pathy[100];
int pathCount = 0;
char ch;

void boundary(); // Boundary
void food();	 // Food
void input();	 // keyboard inputs key
void run();		 // Running

void main()
{
	clrscr();
L5:
	food();

	// Countinue Game
	while (!Gameover)
	{
		boundary();
		input();
		run();

		// Control the speed of snacke
		for (int m = 0; m < 10000; m++)
		{
			for (int n = 0; n < 500; n++)
			{
			}
		}
	}
	textcolor(4);
	cprintf("\nEnter y for Replay ");
	scanf("%c", &ch);
	if (ch == 'y' || ch == 'Y')
		goto L5;
	getch();
}

// Generate Food For Snacke
void food()
{

L1:
	F1 = rand() % 22;
	if (F1 == 0)
		goto L1;
	// 0 for not generate at boundary
L2:
	F2 = rand() % 22;
	if (F2 == 0)
		goto L2;
}

// Generate Snacke Boundary
void boundary()
{
	system("cls");
	for (int i = 0; i < 22; i++)
	{
		for (int j = 0; j < 22; j++)
		{
			if (i == 0 || i == 21 || j == 0 || j == 21)
			{
				textcolor(5);
				cprintf("#"); // bundary Symbol
			}
			else
			{
				if (i == x && j == y)
				{
					textcolor(3);
					cprintf("0"); // Snacke head Symbol
				}
				else if (i == F1 && j == F2)
				{
					textcolor(2);
					cprintf("*"); // Food Symbol
				}
				else
				{
					int bfix = 0;
					for (int k = 0; k < pathCount; k++)
					{
						if (i == pathx[k] && j == pathy[k]) // Food = Snacke head
						{
							textcolor(3);
							cprintf("O"); // snacke body Symbol
							bfix = 1;
						}
					}
					if (bfix == 0)
						printf(" ");
				}
			}
		}
		printf("\n");
	}
	textcolor(4);
	cprintf("Score : %d", scr); // initial Score
	printf("       ER. SONU VERMA");
}

// Move The Snacke from keyboard
void input()
{
	if (kbhit())
	{
		switch (getch())
		{
		case 'a': // Left = a
			dir = 1;
			break;
		case 's': // right = b
			dir = 2;
			break;
		case 'w': // up = w
			dir = 3;
			break;
		case 'z': // down = z
			dir = 4;
			break;
		case 'x': // exit = x
			Gameover = 1;
			break;
		}
	}
}

// Contrl of Snacke
void run()
{
	// Track Path for join the snacke body
	int backPathX = pathx[0];
	int backPathY = pathy[0];
	int bP2X, bP2Y;
	pathx[0] = x;
	pathy[0] = y;
	for (int i = 1; i < pathCount; i++)
	{
		bP2X = pathx[i];
		bP2Y = pathy[i];
		pathx[i] = backPathX;
		pathy[i] = backPathY;
		backPathX = bP2X;
		backPathY = bP2Y;
	}

	// Move Snacke show in console
	switch (dir)
	{
	case 1:
		y--;
		break;
	case 2:
		y++;
		break;
	case 3:
		x--;
		break;
	case 4:
		x++;
		break;
	default:
		break;
	}

	// Game Terminaton
	if (x < 0 || x > 22 || y < 0 || y > 22)
		Gameover = 1;
	for (i = 0; i < pathCount; i++)
	{
		if (x == pathx[i] && y == pathy[i])
			Gameover = 1;
	}
	if (x == F1 && y == F2)
	{
	L3:
		F1 = rand() % 22;
		if (F1 == 0)
			goto L3;

	L4:
		F2 = rand() % 22;
		if (F2 == 0)
			goto L4;
		scr = scr + 10; // Scroe Increase By 10
		pathCount++;
	}
}

// This Game is Developed By ER. SONU VERMA
