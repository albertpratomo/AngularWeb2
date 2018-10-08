import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
	name: 'filter'
})
export class FilterPipe implements PipeTransform {
	transform(items: any[], searchText: string): any[] {
		if(!items) return [];
		if(!searchText) return items;
		
		//Change searchText string into all lowercase and trimmed (whitespaces removed)
		searchText = searchText.toLowerCase().trim();
		return items.filter( it => {
			if (it.name) {
				return it.name.toLowerCase().includes(searchText);
			} else if (it.title) {
				return it.title.toLowerCase().includes(searchText);
			}
		});
	}
}